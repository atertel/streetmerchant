import chalk from 'chalk'
import {readFileSync} from 'fs'

const version = readFileSync('version.txt', 'utf8')

export const banner = {
  asciiVersion: `
  ██████ ▄▄▄█████▓ ██▀███  ▓█████ ▓█████▄▄▄█████▓ ███▄ ▄███▓▓█████  ██▀███   ▄████▄   ██░ ██  ▄▄▄       ███▄    █ ▄▄▄█████▓
▒██    ▒ ▓  ██▒ ▓▒▓██ ▒ ██▒▓█   ▀ ▓█   ▀▓  ██▒ ▓▒▓██▒▀█▀ ██▒▓█   ▀ ▓██ ▒ ██▒▒██▀ ▀█  ▓██░ ██▒▒████▄     ██ ▀█   █ ▓  ██▒ ▓▒
░ ▓██▄   ▒ ▓██░ ▒░▓██ ░▄█ ▒▒███   ▒███  ▒ ▓██░ ▒░▓██    ▓██░▒███   ▓██ ░▄█ ▒▒▓█    ▄ ▒██▀▀██░▒██  ▀█▄  ▓██  ▀█ ██▒▒ ▓██░ ▒░
  ▒   ██▒░ ▓██▓ ░ ▒██▀▀█▄  ▒▓█  ▄ ▒▓█  ▄░ ▓██▓ ░ ▒██    ▒██ ▒▓█  ▄ ▒██▀▀█▄  ▒▓▓▄ ▄██▒░▓█ ░██ ░██▄▄▄▄██ ▓██▒  ▐▌██▒░ ▓██▓ ░
▒██████▒▒  ▒██▒ ░ ░██▓ ▒██▒░▒████▒░▒████▒ ▒██▒ ░ ▒██▒   ░██▒░▒████▒░██▓ ▒██▒▒ ▓███▀ ░░▓█▒░██▓ ▓█   ▓██▒▒██░   ▓██░  ▒██▒ ░
▒ ▒▓▒ ▒ ░  ▒ ░░   ░ ▒▓ ░▒▓░░░ ▒░ ░░░ ▒░ ░ ▒ ░░   ░ ▒░   ░  ░░░ ▒░ ░░ ▒▓ ░▒▓░░ ░▒ ▒  ░ ▒ ░░▒░▒ ▒▒   ▓▒█░░ ▒░   ▒ ▒   ▒ ░░
░ ░▒  ░ ░    ░      ░▒ ░ ▒░ ░ ░  ░ ░ ░  ░   ░    ░  ░      ░ ░ ░  ░  ░▒ ░ ▒░  ░  ▒    ▒ ░▒░ ░  ▒   ▒▒ ░░ ░░   ░ ▒░    ░
░  ░  ░    ░        ░░   ░    ░      ░    ░      ░      ░      ░     ░░   ░ ░         ░  ░░ ░  ░   ▒      ░   ░ ░   ░
	  ░              ░        ░  ░   ░  ░               ░      ░  ░   ░     ░ ░       ░  ░  ░      ░  ░         ░
${version}`,
  render(ascii: boolean, hexColor: string): string {
    return chalk
      .hex(hexColor)
      .bold(ascii ? this.asciiVersion : this.stringVersion)
  },
  stringVersion: `ＳＴＲＥＥＴＭＥＲＣＨＡＮＴ
${version}`,
}
