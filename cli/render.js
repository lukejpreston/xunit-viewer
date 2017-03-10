const resolveFiles = require('./resolve-files')
const parseFiles = require('./parse-files')
const fs = require('fs')
const path = require('path')
const mustache = require('mustache')
const postcss = require('./postcss')
const component = require('./component')

let template = fs.readFileSync(path.resolve(__dirname, './template.html')).toString()
mustache.parse(template)

module.exports = (options) => {
  return resolveFiles(options)
    .then(files => {
      return postcss()
        .then(style => {
          return {style, files}
        })
    })
    .then(({style, files}) => {
      return new Promise((resolve, reject) => {
        component()
          .then(code => {
            resolve({style, files, script: code})
          })
        .catch(err => {
          reject(new Error(err))
        })
      })
    })
    .then(({style, files, script}) => {
      const title = options.title
      const renderOptions = {title, style, script}
      renderOptions.suites = JSON.stringify([])
      renderOptions.sockets = ''

      if (options.watch === false) {
        return parseFiles(files).then(suites => {
          renderOptions.suites = JSON.stringify(suites)
          return mustache.render(template, renderOptions)
        })
      }

      renderOptions.sockets = '<script src="/socket.io/socket.io.js"></script>'
      return mustache.render(template, renderOptions)
    })
    .then(output => {
      return output
    })
}
