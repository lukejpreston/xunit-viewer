process.env.NODE_ENV = 'production'

const path = require('path')
const fs = require('fs-extra')
const babel = require('babel-core')
const browserify = require('browserify')
const uglify = require('uglify-js')

let filesName = path.resolve(__dirname, '../component/app.jsx')
let transformed = babel.transformFileSync(filesName)
let unbundled = path.resolve(__dirname, '../component/unbundled.js')
fs.removeSync(unbundled)
fs.writeFileSync(unbundled, transformed.code)

let index = path.resolve(__dirname, '../component/index.js')
fs.removeSync(index)
let min = path.resolve(__dirname, '../component/index.min.js')
fs.removeSync(min)

browserify(unbundled)
  .bundle((ignore, code) => {
    code = code.toString()
    fs.writeFileSync(index, code)
    fs.writeFileSync(min, uglify.minify(index).code)
  })
