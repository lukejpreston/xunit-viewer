const log = require('./log')
const fs = require('fs-extra')
const path = require('path')
const postcss = require('postcss')
const ccsnext = require('postcss-cssnext')

const dist = path.resolve(__dirname, '../dist')
const distComponent = path.join(dist, 'component')
const distFonts = path.join(dist, 'fonts')

const src = path.resolve(__dirname, '../src')
const srcComponent = path.join(src, 'component')
const srcHeader = path.join(srcComponent, 'header')
const fromHeader = path.join(srcHeader, 'header.css')
const srcSuites = path.join(srcComponent, 'suites')
const fromSuites = path.join(srcSuites, 'suites.css')

const normalize = require.resolve('normalize.css')

let bulma = require.resolve('bulma').replace('bulma.sass', '')
bulma = path.join(bulma, 'css/bulma.css')

const fontAwesome = path.resolve(__dirname, '../node_modules/font-awesome/css/font-awesome.css')
const fonts = path.resolve(__dirname, '../node_modules/font-awesome/fonts')

let allCss = ''

const process = (from) => {
  let input = fs.readFileSync(from).toString()
  postcss([ccsnext])
    .process(input)
    .then(result => {
      allCss += result.css
      postcss([ccsnext])
        .process(allCss, {map: true})
        .then(result => {
          log('postcss', from, path.join(distComponent, 'index.css'))
          fs.writeFileSync(path.join(distComponent, 'index.css'), result.css)
        })
    })
    .catch(err => {
      console.error(err)
    })
}

process(normalize)
process(fontAwesome)
process(bulma)
process(fromHeader)
process(fromSuites)

fs.readdirSync(fonts)
  .filter(file => {
    return !file.includes('otf')
  }).forEach(file => {
    fs.copySync(path.join(fonts, file), path.join(distFonts, file))
  })
