process.env.NODE_ENV = 'production'

const path = require('path')
const fs = require('fs-extra')
const recursive = require('recursive-readdir')
const nodeWatch = require('node-watch')
const babel = require('babel-core')
const browserify = require('browserify')
const uglify = require('uglify-js')

const component = path.resolve(__dirname, '../component')
const dist = path.resolve(__dirname, '../dist')

const app = path.join(dist, 'app.js')
const index = path.join(dist, 'index.js')
const min = path.resolve(dist, 'index.min.js')

const distribute = () => {
  const start = new Date().getTime()
  console.log()
  console.log('start', new Date())

  fs.removeSync(dist)
  fs.mkdirSync(dist)
  fs.mkdirSync(path.join(dist, 'header'))
  fs.mkdirSync(path.join(dist, 'suites'))

  const copy = () => {
    return new Promise((resolve, reject) => {
      recursive(component, ['*.css'], (err, files) => {
        if (err) {
          reject(err)
        } else {
          files.forEach(file => {
            const transformed = babel.transformFileSync(file)
            const newFile = file.replace(component, dist).replace('.jsx', '.js')
            try {
              fs.removeSync(newFile)
            } catch (ignoreError) { }
            fs.writeFileSync(newFile, transformed.code)
          })
          resolve(reject)
        }
      })
    })
  }

  const condense = () => {
    return new Promise((resolve, reject) => {
      browserify(app)
        .bundle((err, code) => {
          if (err !== null) {
            reject(err)
          } else {
            code = code.toString()
            fs.writeFileSync(index, code)
            fs.writeFileSync(min, uglify.minify(index).code)
          }
        })
    })
  }

  copy()
    .then(() => {
      return condense()
    })
    .then(() => {
      const end = new Date().getTime()
      console.log('done', new Date())
      console.log('time taken', (end - start) / 1000, 's')
      console.log()
    })
    .catch(err => {
      console.log(err.stack)
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
  nodeWatch(component, (file) => {
    if (!file.includes('css')) distribute()
  })
}
