const chalk = require('chalk')

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

    if (noColor) return `${icon} ${name}`

    if (status === 'failure') return chalk.red(`${icon} ${name}`)
    if (status === 'passed') return chalk.green(`${icon} ${name}`)
    if (status === 'error') return chalk.yellow(`${icon} ${name}`)
    if (status === 'skipped') return chalk.gray(`${icon} ${name}`)
    return chalk.blueBright(`${icon} ${name}`)
  },
  time: (time) => {
    if (noColor) return `time=${time}`
    return `${chalk.bold.cyan('time')}=${chalk.cyan(time)}`
  },
  suite: (message) => {
    if (noColor) return message
    return chalk.yellow(message)
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
