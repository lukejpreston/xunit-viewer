const resolveOptions = require('./resolve-options')

module.exports = (options) => {
  resolveOptions(options)
    .then(({ results, ignore, output, title, port, watch, filter }) => {
      console.log({ results, ignore, output, title, port, watch, filter })
    })
    .catch(err => {
      console.error(err)
      process.exit(666)
    })
}
