import {Link, Store} from '../store/model'
import {Print, logger} from '../logger'
import Mail from 'nodemailer/lib/mailer'
import {config} from '../config'
import nodemailer from 'nodemailer'
import {Options as SMTPOptions} from 'nodemailer/lib/smtp-transport'

const email = config.notifications.email

const transportOptions: SMTPOptions = {}

if (email.username && (email.password || email.smtpAddress)) {
  transportOptions.auth = {
    user: email.username,
    pass: email.password,
  }
}

if (email.smtpAddress) {
  transportOptions.host = email.smtpAddress
  transportOptions.port = email.smtpPort
} else {
  transportOptions.service = 'gmail'
}

export const transporter = nodemailer.createTransport({
  ...transportOptions,
})

export function sendEmail(link: Link, store: Store): void {
  if (email.username && (email.password || email.smtpAddress)) {
    logger.debug('↗ sending email')

    const mailOptions: Mail.Options = {
      attachments: link.screenshot
        ? [
            {
              filename: link.screenshot,
              path: `./${link.screenshot}`,
            },
          ]
        : undefined,
      from: email.username,
      subject: Print.inStock(link, store),
      text: Print.productInStock(link),
      to: email.to,
    }

    transporter.sendMail(mailOptions, error => {
      if (error) {
        logger.error("✖ couldn't send email", error)
      } else {
        logger.info('✔ email sent')
      }
    })
  }
}
