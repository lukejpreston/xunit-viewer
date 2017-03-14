const resolveOptions = require('./resolve-options')
const startServer = require('./start-server')
const startTerminal = require('./start-terminal')

module.exports = (options) => {
  resolveOptions(options)
    .then(options => {
      if (options.port) startServer(options)
      if (options.terminal) startTerminal(options)
    })
    .catch(err => {
      console.error(err)
      process.exit(666)
    })
}
