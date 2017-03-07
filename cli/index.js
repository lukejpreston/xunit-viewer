const changeCase = require('change-case')
const parseFiles = require('./parse-files')
const resolveFiles = require('./resolve-files')
const nodeWatch = require('node-watch')
const path = require('path')
const fs = require('fs')
const mustache = require('mustache')
const postcss = require('./postcss')

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
        save = false,
        title = 'Xunit Viewer',
        watch = false
    }) {
    const template = fs.readFileSync(path.resolve(__dirname, 'template.html')).toString()
    mustache.parse(template)
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
    } else {
      const script = fs.readFileSync(path.resolve(__dirname, '../component/index.min.js')).toString()

      postcss().then(style => {
        let output = mustache.render(template, {
          style,
          title,
          script
        })

        if (save) {
          if (!path.isAbsolute(save)) save = path.resolve(process.cwd(), save)
          fs.writeFileSync(save, output)
        } else {
          console.log(output)
        }
      })
    }
  }
}
