const fs = require('fs-extra')
const path = require('path')
const postcss = require('postcss')
const ccsnext = require('postcss-cssnext')
const uglifycss = require('uglifycss')

const bulmaFile = require.resolve('bulma').replace('bulma.sass', 'css/bulma.css')
const normalizeFile = require.resolve('normalize.css')
const headerFile = path.resolve(__dirname, '../component/header/header.css')
const suitesFile = path.resolve(__dirname, '../component/suites/suites.css')

module.exports = () => {
  let suites = fs.readFileSync(suitesFile).toString()
  let header = fs.readFileSync(headerFile).toString()
  return postcss([ccsnext])
    .process(suites)
    .then(result => {
      const suitesCss = result.css
      return postcss([ccsnext])
        .process(header)
        .then(result => {
          const headerCss = result.css
          return new Promise(resolve => {
            resolve(headerCss + '\n' + suitesCss)
          })
        })
    })
    .then((css) => {
      let normalize = fs.readFileSync(normalizeFile).toString()
      let bulma = fs.readFileSync(bulmaFile).toString()
      const style = normalize + '\n' + bulma + '\n' + css
      return new Promise((resolve, reject) => {
        resolve(uglifycss.processString(style))
      })
    })
}
