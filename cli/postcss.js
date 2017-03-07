const fs = require('fs-extra')
const path = require('path')
const postcss = require('postcss')
const ccsnext = require('postcss-cssnext')
const uglifycss = require('uglifycss')

let bulma = require.resolve('bulma').replace('bulma.sass', 'css/bulma.css')
let normalize = require.resolve('normalize.css')
let header = path.resolve(__dirname, '../component/header/header.css')
let suites = path.resolve(__dirname, '../component/suites/suites.css')

module.exports = () => {
  suites = fs.readFileSync(suites).toString()
  header = fs.readFileSync(header).toString()
  return postcss([ccsnext])
    .process(suites)
    .then(result => {
      const suitesCss = result.css
      return postcss([ccsnext])
        .process(header)
        .then(result => {
          const headerCss = result.css
          return new Promise(resolve => {
            resolve(suitesCss, headerCss)
          })
        })
    })
    .then((suitesCss, headerCss) => {
      normalize = fs.readFileSync(normalize).toString()
      bulma = fs.readFileSync(bulma).toString()
      const style = uglifycss.processString(normalize + '\n' + bulma + '\n' + headerCss + '\n' + suitesCss)
      return new Promise((resolve, reject) => {
        resolve(style)
      })
    })
}
