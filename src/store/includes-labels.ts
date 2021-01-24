import {Element, LabelQuery, Pricing} from './model'
import {ElementHandle, Page} from 'puppeteer'
import {logger} from '../logger'

export type Selector = {
  requireVisible: boolean
  selector: string
  type: 'innerHTML' | 'outerHTML' | 'textContent'
}

function isElementArray(query: LabelQuery): query is Element[] {
  return (
    Array.isArray(query) && query.length > 0 && typeof query[0] === 'object'
  )
}

function getQueryAsElementArray(
  query: LabelQuery,
  defaultContainer: string,
): Array<Required<Element>> {
  if (isElementArray(query)) {
    return query.map(x => ({
      container: x.container ?? defaultContainer,
      text: x.text,
    }))
  }

  if (Array.isArray(query)) {
    return [
      {
        container: defaultContainer,
        text: query,
      },
    ]
  }

  return [
    {
      container: query.container ?? defaultContainer,
      text: (query as Element).text,
    },
  ]
}

export async function pageIncludesLabels(
  page: Page,
  query: LabelQuery,
  options: Selector,
): Promise<boolean> {
  const elementQueries = getQueryAsElementArray(query, options.selector)

  const resolved = await Promise.all(
    elementQueries.map(async query => {
      const selector = {...options, selector: query.container}
      const contents = (await extractPageContents(page, selector)) ?? ''

      if (!contents) {
        return false
      }

      logger.debug(contents)

      return includesLabels(contents, query.text)
    }),
  )

  return resolved.includes(true)
}

export async function elementIncludesLabels(
  element: ElementHandle,
  query: LabelQuery,
  options: Selector,
): Promise<boolean> {
  const elementQueries = getQueryAsElementArray(query, options.selector)

  const resolved = await Promise.all(
    elementQueries.map(async query => {
      const selector = {...options, selector: query.container}
      const contents = (await extractElementContents(element, selector)) ?? ''

      if (!contents) {
        return false
      }

      logger.debug(contents)

      return includesLabels(contents, query.text)
    }),
  )

  return resolved.includes(true)
}

export async function extractPageContents(
  page: Page,
  selector: Selector,
): Promise<string | null> {
  return page.evaluate((options: Selector) => {
    const element: HTMLElement | null = document.querySelector(options.selector)

    if (!element) {
      return null
    }

    if (
      options.requireVisible &&
      !(element.offsetWidth > 0 && element.offsetHeight > 0)
    ) {
      return null
    }

    switch (options.type) {
      case 'innerHTML':
        return element.innerHTML
      case 'outerHTML':
        return element.outerHTML
      case 'textContent':
        return element.textContent
      default:
        return 'Error: selector.type is unknown'
    }
  }, selector)
}

export async function extractElementContents(
  element: ElementHandle,
  selector: Selector,
): Promise<string | null> {
  return element.evaluate((parent, options: Selector) => {
    const element: HTMLElement | null = parent.querySelector(options.selector)

    if (!element) {
      return null
    }

    if (
      options.requireVisible &&
      !(element.offsetWidth > 0 && element.offsetHeight > 0)
    ) {
      return null
    }

    switch (options.type) {
      case 'innerHTML':
        return element.innerHTML
      case 'outerHTML':
        return element.outerHTML
      case 'textContent':
        return element.textContent
      default:
        return 'Error: selector.type is unknown'
    }
  }, selector)
}

export async function extractElementHandles(
  page: Page,
  selector: string,
): Promise<ElementHandle<HTMLElement>[]> {
  return page.$$(selector)
}

/**
 * Checks if DOM has any related text.
 *
 * @param domText Complete DOM of website.
 * @param searchLabels Search labels for a match.
 */
export function includesLabels(
  domText: string,
  searchLabels: string[],
): boolean {
  const domTextLowerCase = domText.toLowerCase()
  return searchLabels.some(label =>
    domTextLowerCase.includes(label.toLowerCase()),
  )
}

export async function extractAttributeValue(
  element: ElementHandle,
  attributeName: string,
  selector?: string,
): Promise<string | null> {
  return element.evaluate(
    (element, attributeName, selector) => {
      if (selector === null || selector === undefined) {
        return element.getAttribute(attributeName)
      }

      return (element.querySelector(selector) as HTMLElement).getAttribute(
        attributeName,
      )
    },
    attributeName,
    selector ?? null,
  )
}

export async function getPrice(
  page: Page,
  query: Pricing,
  options: Selector,
): Promise<number | null> {
  const selector = {...options, selector: query.container}
  const priceString = await extractPageContents(page, selector)

  if (priceString) {
    const priceSeparator = query.euroFormat ? /\./g : /,/g
    const price = Number.parseFloat(
      priceString
        .replace(priceSeparator, '')
        .match(/\d+/g)
        ?.join('.') as string,
    )

    logger.debug('received price', price)
    return price
  }

  return null
}

export async function getElementPrice(
  element: ElementHandle,
  query: Pricing,
  options: Selector,
): Promise<number | null> {
  const selector = {...options, selector: query.container}
  const priceString = await extractElementContents(element, selector)

  if (priceString) {
    const priceSeparator = query.euroFormat ? /\./g : /,/g
    const price = Number.parseFloat(
      priceString
        .replace(priceSeparator, '')
        .match(/\d+/g)
        ?.join('.') as string,
    )

    logger.debug('received price', price)
    return price
  }

  return null
}
