const merge = require('merge')
let parse = require('./parse')
if (typeof window !== 'undefined') parse = window.parse

module.exports = async (logger, files) => {
  let suites = {}
  for (const { file, contents } of files) {
    try {
      const res = await parse(contents)
      suites = merge.recursive(true, suites, res)
    } catch (err) {
      console.log(logger.error('Failed to parse'), logger.file(file), '\n', logger.error(err.message), '\n')
    }
  }
  return suites
}
