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
            resolve(headerCss + '\n' + suitesCss)
          })
        })
    })
    .then((css) => {
      normalize = fs.readFileSync(normalize).toString()
      bulma = fs.readFileSync(bulma).toString()
      const style = normalize + '\n' + bulma + '\n' + css
      return new Promise((resolve, reject) => {
        resolve(style)
      })
    })
}
