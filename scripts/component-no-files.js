process.env.NODE_ENV = 'production'

const path = require('path')
const recursive = require('recursive-readdir')
const babel = require('babel-core')
const component = path.resolve(__dirname, '../component')
const browserify = require('browserify')
const Readable = require('stream').Readable

module.exports = () => {
  return new Promise((resolve, reject) => {
    recursive(component, ['*.css'], (err, files) => {
      if (err) throw err

      let external = []
      let bundled = files.map(file => '')
      files.map(file => {
        const transformed = babel.transformFileSync(file)
        return {
          file,
          code: transformed.code
        }
      })
      .map(({file, code}) => {
        let matched = code.match(/'[./]+[a-zA-Z0-9-]+'/g)
        if (matched !== null) {
          matched = matched.map(m => {
            return m.replace(/'/g, '')
          })
          external = external.concat(matched)
        }
        return {file, code}
      })
      .forEach(({file, code}, index) => {
        let readbleCode = new Readable()
        readbleCode.push(code)
        readbleCode.push(null)

        browserify(readbleCode)
          .external(external)
          .bundle((err, code) => {
            if (err) reject(err)
            else bundled[index] = code.toString()

            if (!bundled.some(b => b === '')) resolve(bundled.join('\n'))
          })
      })
    })
  })
}
