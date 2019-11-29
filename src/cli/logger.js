const chalk = require('chalk')
const { title } = require('change-case')

module.exports = (noColor) => ({
  server: (message, address) => {
    if (noColor) return `${message} ${address}`
    return `${chalk.bold(message)} ${chalk.underline.blueBright(address)}`
  },
  property: (key, values) => {
    if (noColor) return `${key}=${values.join(', ')}`
    return `${chalk.bold.cyan(key)}=${chalk.cyan(values.join(', '))}`
  },
  test: (status, name) => {
    let icon = '?'
    if (status === 'failure') icon = '✗'
    if (status === 'passed') icon = '✓'
    if (status === 'error') icon = '!'
    if (status === 'skipped') icon = '⊘'

    if (noColor) return `${icon} ${title(name)}`

    if (status === 'failure') return chalk.red(`${icon} ${title(name)}`)
    if (status === 'passed') return chalk.green(`${icon} ${title(name)}`)
    if (status === 'error') return chalk.yellow(`${icon} ${title(name)}`)
    if (status === 'skipped') return chalk.gray(`${icon} ${title(name)}`)
    return chalk.blueBright(`${icon} ${title(name)}`)
  },
  time: (time) => {
    if (noColor) return `time=${time}`
    return `${chalk.bold.cyan('time')}=${chalk.cyan(time)}`
  },
  suite: (message) => {
    if (noColor) return title(message)
    return chalk.yellow(title(message))
  },
  error: (message) => {
    if (noColor) return message
    return chalk.red(message)
  },
  warning: (message) => {
    if (noColor) return message
    return chalk.yellow(message)
  },
  file: (message) => {
    if (noColor) return message
    return chalk.underline.blueBright(message)
  }
})
