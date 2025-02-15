import {Link, Store} from '../store/model'
import Discord from 'discord.js'
import {config} from '../config'
import {logger} from '../logger'

const discord = config.notifications.discord
const {notifyGroup, webhooks, notifyGroupSeries} = discord

function getIdAndToken(webhook: string) {
  const match = /.*\/webhooks\/(\d+)\/(.+)/.exec(webhook)

  if (!match) {
    throw new Error('could not get discord webhook')
  }

  return {
    id: match[1],
    token: match[2],
  }
}

export function sendDiscordMessage(link: Link, store: Store): void {
  if (webhooks.length > 0) {
    logger.debug('↗ sending discord message')
    void (async () => {
      try {
        const embed = new Discord.MessageEmbed()
          .setTitle('_**Stock alert!**_')
          .setDescription('')

          .setColor('#52b788')
          .setTimestamp()

        embed.addField('Store', store.name, true)
        if (link.price)
          embed.addField('Price', `${store.currency}${link.price}`, true)
        embed.addField('Product Name', link.name)
        embed.addField('Product Page', link.url)
        embed.addField('Series', link.series, true)

        embed.setTimestamp()

        let notifyText: string[] = []

        if (notifyGroup) {
          notifyText = notifyText.concat(notifyGroup)
        }

        if (Object.keys(notifyGroupSeries).indexOf(link.series) !== -1) {
          notifyText = notifyText.concat(notifyGroupSeries[link.series])
        }

        const promises = []
        for (const webhook of webhooks) {
          const {id, token} = getIdAndToken(webhook)
          const client = new Discord.WebhookClient(id, token)

          promises.push({
            client,
            message: client.send(notifyText.join(' '), {
              embeds: [embed],
              username: 'GameGearStock',
            }),
          })
        }

        ;(await Promise.all(promises)).forEach(({client}) => client.destroy())

        logger.info('✔ discord message sent')
      } catch (error: unknown) {
        logger.error("✖ couldn't send discord message", error)
      }
    })()
  }
}
