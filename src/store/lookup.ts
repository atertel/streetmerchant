import {
  Browser,
  Page,
  PageEventObj,
  Request,
  RespondOptions,
  Response,
} from 'puppeteer'
import {
  Attribute,
  Link,
  ListLink,
  ProductLink,
  Store,
  getStores,
  Brand,
  Model,
} from './model'
import {Print, logger} from '../logger'
import {
  Selector,
  elementIncludesLabels,
  extractAttributeValue,
  extractElementContents,
  extractElementHandles,
  getElementPrice,
  getPrice,
  pageIncludesLabels,
} from './includes-labels'
import {
  closePage,
  delay,
  getRandomUserAgent,
  getSleepTime,
  isStatusCodeInRange,
  noop,
} from '../util'
import {disableBlockerInPage, enableBlockerInPage} from '../adblocker'
import {config} from '../config'
import {fetchLinks} from './fetch-links'
import {filterStoreLink} from './filter'
import open from 'open'
import {processBackoffDelay} from './model/helpers/backoff'
import {sendNotification} from '../notification'
import useProxy from '@doridian/puppeteer-page-proxy'

const inStock: Record<string, boolean> = {}

const linkBuilderLastRunTimes: Record<string, number> = {}

function nextProxy(store: Store) {
  if (!store.proxyList) {
    return
  }

  if (store.currentProxyIndex === undefined) {
    store.currentProxyIndex = 0
  }

  store.currentProxyIndex++
  if (store.currentProxyIndex >= store.proxyList.length) {
    store.currentProxyIndex = 0
  }

  logger.info(
    `ℹ [${store.name}] Next proxy index: ${store.currentProxyIndex} / Count: ${store.proxyList.length}`,
  )

  return store.proxyList[store.currentProxyIndex]
}

async function handleLowBandwidth(request: Request) {
  if (!config.browser.lowBandwidth) {
    return false
  }

  const typ = request.resourceType()
  if (typ === 'font' || typ === 'image') {
    try {
      await request.abort()
    } catch {
      // noop
    }

    return true
  }

  return false
}

async function handleProxy(request: Request, proxy?: string) {
  if (!proxy) {
    return false
  }

  try {
    await useProxy(request, proxy)
  } catch (error: unknown) {
    logger.error('handleProxy', error)
    try {
      await request.abort()
    } catch {
      // noop
    }
  }

  return true
}

async function handleAdBlock(
  request: Request,
  adBlockRequestHandler: (req: Request) => void,
) {
  if (!adBlockRequestHandler) {
    return false
  }

  return new Promise(resolve => {
    // eslint-disable-next-line @typescript-eslint/require-await
    const continueFunc = async () => {
      resolve(false)
    }

    const abortFunc = async () => {
      try {
        await request.abort()
      } catch {
        // noop
      }

      resolve(true)
    }

    const respondFunc = async (response: RespondOptions) => {
      try {
        await request.respond(response)
      } catch {
        // noop
      }

      resolve(true)
    }

    const requestProxy = new Proxy(request, {
      get(target, prop, receiver) {
        if (prop === 'continue') {
          return continueFunc
        }

        if (prop === 'abort') {
          return abortFunc
        }

        if (prop === 'respond') {
          return respondFunc
        }

        return Reflect.get(target, prop, receiver) as (
          response?: RespondOptions,
        ) => Promise<void>
      },
    })

    adBlockRequestHandler(requestProxy)
  })
}

/**
 * Responsible for looking up information about a each product within
 * a `Store`. It's important that we ignore `no-await-in-loop` here
 * because we don't want to get rate limited within the same store.
 *
 * @param browser Puppeteer browser.
 * @param store Vendor of graphics cards.
 */
async function lookup(browser: Browser, store: Store) {
  if (!getStores().has(store.name)) {
    return
  }

  if (store.linksBuilder) {
    const lastRunTime = linkBuilderLastRunTimes[store.name] ?? -1
    const ttl = store.linksBuilder.ttl ?? Number.MAX_SAFE_INTEGER
    if (lastRunTime === -1 || Date.now() - lastRunTime > ttl) {
      logger.info(`[${store.name}] Running linksBuilder...`)
      try {
        await fetchLinks(store, browser)
        linkBuilderLastRunTimes[store.name] = Date.now()
      } catch (error: unknown) {
        logger.error(error)
      }
    }
  }

  const useListLinks =
    config.store.preferListPages?.includes(store.name) &&
    store.listLinks &&
    store.listLinks.length > 0

  const links: Link[] = useListLinks
    ? (store.listLinks as ListLink[])
    : store.links

  /* eslint-disable no-await-in-loop */
  for (const link of links) {
    if (!filterStoreLink(link)) {
      continue
    }

    if (config.page.inStockWaitTime && inStock[link.url]) {
      logger.info(Print.inStockWaiting(link, store, true))
      continue
    }

    const proxy = nextProxy(store)

    const useAdBlock = !config.browser.lowBandwidth && !store.disableAdBlocker
    const customContext = config.browser.isIncognito

    const context = customContext
      ? await browser.createIncognitoBrowserContext()
      : browser.defaultBrowserContext()
    const page = await context.newPage()
    await page.setRequestInterception(true)

    page.setDefaultNavigationTimeout(config.page.timeout)
    await page.setUserAgent(getRandomUserAgent())

    let adBlockRequestHandler: () => void
    let pageProxy
    if (useAdBlock) {
      const onProxyFunc = (event: keyof PageEventObj, handler: () => void) => {
        if (event !== 'request') {
          page.on(event, handler)
          return
        }

        adBlockRequestHandler = handler
      }

      pageProxy = new Proxy(page, {
        get(target, prop, receiver) {
          if (prop === 'on') {
            return onProxyFunc
          }

          // Give dummy setRequestInterception to avoid AdBlock from messing with it
          if (prop === 'setRequestInterception') {
            return noop
          }

          return Reflect.get(target, prop, receiver) as () => void
        },
      })
      await enableBlockerInPage(pageProxy)
    }

    await page.setRequestInterception(true)
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    page.on('request', async request => {
      if (await handleLowBandwidth(request)) {
        return
      }

      if (await handleAdBlock(request, adBlockRequestHandler)) {
        return
      }

      if (await handleProxy(request, proxy)) {
        return
      }

      try {
        await request.continue()
      } catch {
        // noop
      }
    })

    if (config.store.disableScripts.includes(store.name)) {
      await page.setJavaScriptEnabled(false)
    }

    let statusCode = 0

    try {
      statusCode = await (useListLinks
        ? lookupCards(browser, store, page, link)
        : lookupCard(browser, store, page, link))
    } catch (error: unknown) {
      logger.error(
        `✖ [${store.name}] ${link.brand as Brand} ${link.series} ${
          link.model as Model
        } - ${(error as Error).message}`,
      )
      const client = await page.target().createCDPSession()
      await client.send('Network.clearBrowserCookies')
    }

    if (pageProxy) {
      await disableBlockerInPage(pageProxy)
    }

    // Must apply backoff before closing the page, e.g. if CloudFlare is
    // used to detect bot traffic, it introduces a 5 second page delay
    // before redirecting to the next page
    await processBackoffDelay(store, link, statusCode)
    await closePage(page)
    if (customContext) {
      await context.close()
    }
  }
  /* eslint-enable no-await-in-loop */
}

async function lookupCards(
  browser: Browser,
  store: Store,
  page: Page,
  link: ListLink,
): Promise<number> {
  const givenWaitFor = store.waitUntil ? store.waitUntil : 'networkidle0'
  const response: Response | null = await page.goto(link.url, {
    waitUntil: givenWaitFor,
  })

  const successStatusCodes = store.successStatusCodes ?? [[0, 399]]
  const statusCode = await handleResponse(browser, store, page, link, response)

  if (!isStatusCodeInRange(statusCode, successStatusCodes)) {
    return statusCode
  }

  if (store.listLabels?.scrollIntoView) {
    let containers = await page.$$(store.listLabels.container as string)
    let containerCount = 0

    /* eslint-disable no-await-in-loop */
    for (;;) {
      await page.evaluate((selector: string) => {
        document.querySelector(selector)?.scrollIntoView()
      }, store.listLabels.scrollIntoView)

      await new Promise<void>(resolve => {
        setTimeout(() => {
          resolve()
        }, 500)
      })

      if (store.listLabels.scrollIntoViewEnd) {
        if (await page.$(store.listLabels.scrollIntoViewEnd)) {
          break
        }
      } else {
        containers = await page.$$(store.listLabels.container as string)

        if (containers.length === containerCount) {
          break
        }

        containerCount = containers.length
      }
    }
    /* eslint-enable no-await-in-loop */
  }

  const cardsInStock = await lookupCardsInStock(store, page, link)

  if (cardsInStock) {
    for (const card of cardsInStock) {
      const givenUrl =
        card.cartUrl && config.store.autoAddToCart ? card.cartUrl : card.url
      logger.info(`${Print.inStock(card, store, true)}\n${givenUrl}`)

      sendNotification(card, store)

      if (config.page.inStockWaitTime) {
        inStock[link.url] = true

        setTimeout(() => {
          inStock[link.url] = false
        }, 1000 * config.page.inStockWaitTime)
      }
    }
  }

  return statusCode
}

async function lookupCard(
  browser: Browser,
  store: Store,
  page: Page,
  link: Link,
): Promise<number> {
  const givenWaitFor = store.waitUntil ? store.waitUntil : 'networkidle0'
  const response: Response | null = await page.goto(link.url, {
    waitUntil: givenWaitFor,
  })

  const successStatusCodes = store.successStatusCodes ?? [[0, 399]]
  const statusCode = await handleResponse(browser, store, page, link, response)

  if (!isStatusCodeInRange(statusCode, successStatusCodes)) {
    return statusCode
  }

  if (await lookupCardInStock(store, page, link)) {
    const givenUrl =
      link.cartUrl && config.store.autoAddToCart ? link.cartUrl : link.url
    logger.info(`${Print.inStock(link, store, true)}\n${givenUrl}`)

    if (config.browser.open) {
      await (link.openCartAction === undefined
        ? open(givenUrl)
        : link.openCartAction(browser))
    }

    sendNotification(link, store)

    if (config.page.inStockWaitTime) {
      inStock[link.url] = true

      setTimeout(() => {
        inStock[link.url] = false
      }, 1000 * config.page.inStockWaitTime)
    }

    if (config.page.screenshot) {
      logger.debug('ℹ saving screenshot')

      link.screenshot = `success-${Date.now()}.png`
      await page.screenshot({path: link.screenshot})
    }
  }

  return statusCode
}

// eslint-disable-next-line max-params
async function handleResponse(
  browser: Browser,
  store: Store,
  page: Page,
  link: Link,
  response?: Response | null,
  recursionDepth = 0,
) {
  if (!response) {
    logger.debug(Print.noResponse(link, store, true))
  }

  const successStatusCodes = store.successStatusCodes ?? [[0, 399]]
  let statusCode = response?.status() ?? 0
  if (!isStatusCodeInRange(statusCode, successStatusCodes)) {
    if (statusCode === 429) {
      logger.warn(Print.rateLimit(link, store, true))
    } else if (statusCode === 503) {
      if (await checkIsCloudflare(store, page, link)) {
        if (recursionDepth > 4) {
          logger.warn(Print.recursionLimit(link, store, true))
        } else {
          const response: Response | null = await page.waitForNavigation({
            waitUntil: 'networkidle0',
          })
          recursionDepth++
          statusCode = await handleResponse(
            browser,
            store,
            page,
            link,
            response,
            recursionDepth,
          )
        }
      } else {
        logger.warn(Print.badStatusCode(link, store, statusCode, true))
      }
    } else {
      logger.warn(Print.badStatusCode(link, store, statusCode, true))
    }
  }

  return statusCode
}

async function checkIsCloudflare(store: Store, page: Page, link: Link) {
  const baseOptions: Selector = {
    requireVisible: true,
    selector: 'body',
    type: 'textContent',
  }

  const cloudflareLabel = {
    container: 'div[class="attribution"] a[rel="noopener noreferrer"]',
    text: ['Cloudflare'],
  }

  if (await pageIncludesLabels(page, cloudflareLabel, baseOptions)) {
    logger.warn(Print.cloudflare(link, store, true))
    return true
  }

  return false
}

async function lookupCardsInStock(store: Store, page: Page, link: Link) {
  const baseOptions: Selector = {
    requireVisible: false,
    selector: store.labels.container ?? 'body',
    type: 'textContent',
  }

  if (store.labels.captcha) {
    if (await pageIncludesLabels(page, store.labels.captcha, baseOptions)) {
      logger.warn(Print.captcha(link, store, true))
      await delay(getSleepTime(store))
      return false
    }
  }

  if (store.labels.bannedSeller) {
    if (
      await pageIncludesLabels(page, store.labels.bannedSeller, baseOptions)
    ) {
      logger.warn(Print.bannedSeller(link, store, true))
      return false
    }
  }

  const cardsInStock: Link[] = []

  const cardElements = await extractElementHandles(
    page,
    store.listLabels?.container ?? 'body',
  )

  /* eslint-disable no-await-in-loop */
  for (const cardElement of cardElements) {
    const cardLink: ProductLink = {
      brand: link.brand ?? 'test:brand',
      model: link.model ?? 'test:model',
      series: link.series ?? 'test:series',
      url: '',
    }

    if (store.listLabels?.outOfStock) {
      if (
        await elementIncludesLabels(
          cardElement,
          store.listLabels.outOfStock,
          baseOptions,
        )
      ) {
        logger.info(Print.outOfStock(link, store, true))
        continue
      }
    }

    if (store.listLabels?.maxPrice) {
      const maxPrice = link.series && config.store.maxPrice.series[link.series]

      cardLink.price = await getElementPrice(
        cardElement,
        store.listLabels.maxPrice,
        baseOptions,
      )

      if (
        cardLink.price &&
        maxPrice &&
        cardLink.price > maxPrice &&
        maxPrice > 0
      ) {
        logger.info(Print.maxPrice(link, store, maxPrice, true))
        continue
      }
    }

    if (store.listLabels?.inStock) {
      const options = {
        ...baseOptions,
        requireVisible: true,
        type: 'outerHTML' as const,
      }

      if (
        !(await elementIncludesLabels(
          cardElement,
          store.listLabels.inStock,
          options,
        ))
      ) {
        logger.info(Print.outOfStock(link, store, true))
        continue
      }
    }

    if (link.labels?.inStock) {
      const options = {
        ...baseOptions,
        requireVisible: true,
        type: 'outerHTML' as const,
      }

      if (
        !(await elementIncludesLabels(
          cardElement,
          link.labels.inStock,
          options,
        ))
      ) {
        logger.info(Print.outOfStock(link, store, true))
        continue
      }
    }

    cardLink.url = (await extractAttributeValue(
      cardElement,
      (store.listLabels?.url as Attribute).attributeName,
      (store.listLabels?.url as Attribute).container,
    )) as string

    cardLink.url = new URL(cardLink.url, link.url).toString()

    cardLink.name = (await extractElementContents(cardElement, {
      requireVisible: true,
      selector: store.listLabels?.name ?? '*',
      type: 'textContent',
    })) as string

    cardsInStock.push(cardLink)
  }
  /* eslint-enable no-await-in-loop */

  return cardsInStock.length > 0 ? cardsInStock : false
}

async function lookupCardInStock(store: Store, page: Page, link: Link) {
  const baseOptions: Selector = {
    requireVisible: false,
    selector: store.labels.container ?? 'body',
    type: 'textContent',
  }

  if (store.labels.captcha) {
    if (await pageIncludesLabels(page, store.labels.captcha, baseOptions)) {
      logger.warn(Print.captcha(link, store, true))
      await delay(getSleepTime(store))
      return false
    }
  }

  if (store.labels.bannedSeller) {
    if (
      await pageIncludesLabels(page, store.labels.bannedSeller, baseOptions)
    ) {
      logger.warn(Print.bannedSeller(link, store, true))
      return false
    }
  }

  if (store.labels.outOfStock) {
    if (await pageIncludesLabels(page, store.labels.outOfStock, baseOptions)) {
      logger.info(Print.outOfStock(link, store, true))
      return false
    }
  }

  if (store.labels.maxPrice) {
    const maxPrice = config.store.maxPrice.series[link.series]

    link.price = await getPrice(page, store.labels.maxPrice, baseOptions)

    if (link.price && link.price > maxPrice && maxPrice > 0) {
      logger.info(Print.maxPrice(link, store, maxPrice, true))
      return false
    }
  }

  // Fixme: currently causing issues
  // Do API inventory validation in realtime (no cache) if available
  // if (
  // 	store.realTimeInventoryLookup !== undefined &&
  // 	link.itemNumber !== undefined
  // ) {
  // 	return store.realTimeInventoryLookup(link.itemNumber);
  // }

  if (store.labels.inStock) {
    const options = {
      ...baseOptions,
      requireVisible: true,
      type: 'outerHTML' as const,
    }

    if (!(await pageIncludesLabels(page, store.labels.inStock, options))) {
      logger.info(Print.outOfStock(link, store, true))
      return false
    }
  }

  if (link.labels?.inStock) {
    const options = {
      ...baseOptions,
      requireVisible: true,
      type: 'outerHTML' as const,
    }

    if (!(await pageIncludesLabels(page, link.labels.inStock, options))) {
      logger.info(Print.outOfStock(link, store, true))
      return false
    }
  }

  return true
}

export async function tryLookupAndLoop(
  browser: Browser,
  store: Store,
): Promise<void> {
  if (!browser.isConnected()) {
    logger.debug(`[${store.name}] Ending this loop as browser is disposed...`)
    return
  }

  logger.debug(`[${store.name}] Starting lookup...`)
  try {
    await lookup(browser, store)
  } catch (error: unknown) {
    logger.error(error)
  }

  const sleepTime = getSleepTime(store)
  logger.debug(`[${store.name}] Lookup done, next one in ${sleepTime} ms`)
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  setTimeout(tryLookupAndLoop, sleepTime, browser, store)
}
