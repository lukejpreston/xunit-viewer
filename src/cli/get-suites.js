import merge from 'merge'
import parse from './parse.js'

let parseXml = parse
if (typeof window !== 'undefined') parseXml = window.parse

export default async (logger, files) => {
  let suites = {}
  for (const { file, contents } of files) {
    try {
      const res = await parseXml(contents)
      suites = merge.recursive(true, suites, res)
    } catch (err) {
      console.log(logger.error('Failed to parse'), logger.file(file), '\n', logger.error(err.message), '\n')
    }
  }
  return suites
}
