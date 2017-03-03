const chalk = require('chalk')
const path = require('path')

module.exports = (name, from, to) => {
  const NAME = chalk.bold.yellow(name.toUpperCase())
  const FROM = chalk.bold.cyan(from.replace(path.resolve(__dirname, '..'), '').replace('/', ''))
  const ARROW = chalk.bold.red('->')
  const TO = chalk.bold.cyan(to.replace(path.resolve(__dirname, '..'), '').replace('/', ''))

  console.log(NAME, FROM, ARROW, TO)
}
