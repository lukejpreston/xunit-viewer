process.env.NODE_ENV = 'production'

const path = require('path')
const browserify = require('browserify')

const component = path.resolve(__dirname, '../component')

module.exports = () => {
  return new Promise((resolve, reject) => {
    browserify(path.join(component, 'app.jsx'), {
      basedir: component,
      extensions: ['.js', '.jsx']
    })
      .transform('babelify', {
        presets: [
          '@babel/preset-env',
          '@babel/preset-react'
        ]
      })
      .bundle((err, code) => {
        if (err) reject(err)
        else resolve(code.toString())
      })
  })
}
