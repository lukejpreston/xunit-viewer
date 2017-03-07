const changeCase = require('change-case')
const parseFiles = require('./parse-files')
const resolveFiles = require('./resolve-files')
const nodeWatch = require('node-watch')
const path = require('path')

const getResults = (results, ignore) => {
  return resolveFiles(results, ignore)
      .then(files => {
        return parseFiles(files)
      })
}

module.exports = {
  run ({
        port = false,
        results = '',
        ignore = [],
        save = '',
        title = 'Xunit Viewer',
        watch = false
    }) {
    title = changeCase.title(title)
    results = results || process.cwd()
    if (!path.isAbsolute(results)) results = path.resolve(process.cwd(), results)

    if (watch) {
      watch = nodeWatch(results)
      watch.on('change', (filename) => {
        getResults(results, ignore)
          .then(results => {
            console.log(results)
          })
          .catch(err => {
            console.error(err.file, '\n', err.message)
          })
      })
    }
  }
}
