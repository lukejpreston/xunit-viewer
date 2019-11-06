const parser = require('../parser')
const fs = require('fs-extra')

module.exports = (files) => {
  return new Promise((resolve, reject) => {
    const results = files.map(file => {
      try {
        const input = fs.readFileSync(file).toString()
        return parser.parse(input)
      } catch (err) {
        err.file = file
        reject(err)
      }
    })

    resolve([].concat.apply([], results))
  })
}
