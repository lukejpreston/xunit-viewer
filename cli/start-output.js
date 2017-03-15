const render = require('./render')
const fs = require('fs')
const nodeWatch = require('node-watch')
const chalk = require('chalk')

const save = (options) => {
  console.log(chalk.yellow('Parsing:'), chalk.cyan(options.results))
  render(options)
    .then(result => {
      fs.writeFileSync(options.output, result)
      console.log(chalk.yellow('Written:'), chalk.cyan(options.output))
    })
    .catch(err => {
      console.error(err)
    })
}

module.exports = (options) => {
  save(options)
  if (options.watch) {
    nodeWatch(options.results, () => {
      save(options)
    })
  }
}
