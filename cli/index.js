const resolveOptions = require('./resolve-options')

module.exports = (options) => {
  resolveOptions(options).then(({ results, ignore, save, title, port, watch, terminal, filter, hide }) => {
    console.log({ results, ignore, save, title, port, watch, terminal, filter, hide })
  })
}
