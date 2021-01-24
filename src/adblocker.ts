import {Page} from 'puppeteer'
import {PuppeteerExtraPluginAdblocker} from 'puppeteer-extra-plugin-adblocker'

export const adBlocker = new PuppeteerExtraPluginAdblocker({
  blockTrackers: true,
})

export async function enableBlockerInPage(page: Page): Promise<void> {
  const blockerObject = await adBlocker.getBlocker()
  if (blockerObject.isBlockingEnabled(page)) {
    return
  }

  await blockerObject.enableBlockingInPage(page)
}

export async function disableBlockerInPage(page: Page): Promise<void> {
  const blockerObject = await adBlocker.getBlocker()
  if (!blockerObject.isBlockingEnabled(page)) {
    return
  }

  await blockerObject.disableBlockingInPage(page)
}
