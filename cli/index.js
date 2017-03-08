const resolveOptions = require('./resolve-options')
const startServer = require('./start-server')

module.exports = (options) => {
  resolveOptions(options)
    .then(options => {
      if (options.port) startServer(options)
    })
    .catch(err => {
      console.error(err)
      process.exit(666)
    })
}
