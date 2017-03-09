process.env.NODE_ENV = 'production'

const path = require('path')
const fs = require('fs-extra')
const recursive = require('recursive-readdir')
const nodeWatch = require('node-watch')
const babel = require('babel-core')
const browserify = require('browserify')
const uglify = require('uglify-js')

const component = path.resolve(__dirname, '../component')

const distribute = () => {
  const start = new Date().getTime()
  console.log()
  console.log('start', new Date())

  const dist = path.resolve(__dirname, '../dist')

  fs.removeSync(dist)
  fs.mkdirSync(dist)
  fs.mkdirSync(path.join(dist, 'header'))
  fs.mkdirSync(path.join(dist, 'suites'))

  const copy = () => {
    return new Promise((resolve) => {
      recursive(component, ['*.css'], (err, files) => {
        if (err) {
          console.error(err)
          process.exit(666)
        }

        files.forEach(file => {
          const transformed = babel.transformFileSync(file)

          const newFile = file.replace(component, dist).replace('.jsx', '.js')

          try {
            fs.removeSync(newFile)
          } catch (ignoreError) {}
          fs.writeFileSync(newFile, transformed.code)
        })
        resolve()
      })
    })
  }

  copy().then(() => {
    let app = path.join(dist, 'app.js')
    let index = path.join(dist, 'index.js')
    let min = path.resolve(dist, 'index.min.js')

    browserify(app)
      .bundle((err, code) => {
        if (err !== null) {
          console.error(err)
          process.exit(666)
        }
        code = code.toString()
        fs.writeFileSync(index, code)
        fs.writeFileSync(min, uglify.minify(index).code)
        const end = new Date().getTime()
        console.log('done', new Date())
        console.log('time taken', (end - start) / 1000, 's')
        console.log()
      })
  })
}

let shouldWatch = process.argv.some(arg => {
  return arg.includes('watch')
})

if (!shouldWatch) {
  distribute()
} else {
  console.log('watching')
  distribute()
  let watch = nodeWatch(component)
  watch.on('change', distribute)
}
