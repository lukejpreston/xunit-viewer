process.env.NODE_ENV = 'production'

const fs = require('fs-extra')
const path = require('path')
const babel = require('babel-core')
const browserify = require('browserify')
const log = require('./log')

const dist = path.resolve(__dirname, '../dist')
const distComponent = path.join(dist, 'component')
const distServer = path.join(dist, 'server')
const distHtml = path.join(dist, 'html')
const distHeader = path.join(distComponent, 'header')
const distSuites = path.join(distComponent, 'suites')

const src = path.resolve(__dirname, '../src')
const srcComponent = path.join(src, 'component')
const srcServer = path.join(src, 'server')
const srcHtml = path.join(src, 'html')
const srcHeader = path.join(srcComponent, 'header')
const srcSuites = path.join(srcComponent, 'suites')

const transform = (src, dist, file, to) => {
  let fullFrom = path.join(src, file)
  let transformed = babel.transformFileSync(fullFrom)

  file = file.replace('jsx', 'js')
  to = to || file
  let fullTo = path.join(dist, to)

  log('babel', fullFrom, fullTo)
  fs.writeFileSync(fullTo, transformed.code)
}

fs.readdirSync(srcComponent).forEach(file => {
  if (file === 'index.js') {
    transform(srcComponent, distComponent, file, 'xunit-viewer.js')
  } else if (file !== 'style.js' && file !== 'header' && file !== 'suites' && !file.includes('css')) {
    transform(srcComponent, distComponent, file)
  }
})

fs.readdirSync(srcHeader).forEach(file => {
  if (!file.includes('css')) {
    transform(srcHeader, distHeader, file)
  }
})

fs.readdirSync(srcSuites).forEach(file => {
  if (!file.includes('css')) {
    transform(srcSuites, distSuites, file)
  }
})

transform(srcServer, distServer, 'index.js')
transform(srcHtml, distHtml, 'index.js', 'unbundled.js')

log('browserify', path.join(distHtml, 'unbundled.js'), path.join(distHtml, 'index.js'))

browserify()
  .add(path.join(distHtml, 'unbundled.js'))
  .bundle()
  .pipe(fs.createWriteStream(path.join(distHtml, 'index.js')))

log('browserify', path.join(distComponent, 'xunit-viewer.js'), path.join(distComponent, 'index.js'))

browserify()
  .add(path.join(distComponent, 'xunit-viewer.js'))
  .bundle()
  .pipe(fs.createWriteStream(path.join(distComponent, 'index.js')))
