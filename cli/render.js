const resolveFiles = require('./resolve-files')
const parseFiles = require('./parse-files')
const fs = require('fs')
const path = require('path')
const mustache = require('mustache')
const postcss = require('./postcss')
const component = require('./component')

let template = fs.readFileSync(path.resolve(__dirname, './template.html')).toString()
mustache.parse(template)

const icons = {
  xv: 'data:image/png;base64,data:image/png;base64,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',
  pass: '',
  fail: ''
}

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
      const escape = options.escape
      const renderOptions = {title, style, script, escape}
      renderOptions.suites = JSON.stringify([])
      renderOptions.sockets = ''
      if (options.watch === false) renderOptions.sockets = '<script src="/socket.io/socket.io.js"></script>'
      renderOptions.favico = icons.xv

      return parseFiles(files).then(suites => {
        renderOptions.suites = JSON.stringify(suites)
        return mustache.render(template, renderOptions)
      })
    })
    .then(output => {
      return output
    })
}
