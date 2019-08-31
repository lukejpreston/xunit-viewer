const fs = require('fs')
const merge = require('merge')
const { args, showHelp } = require('./args')
const Logger = require('./logger')
const getFiles = require('./get-files')
const parse = require('../parse')
const terminal = require('./terminal')
const render = require('./render')
const ChangeCase = require('change-case')

const logger = Logger(args.noColor)

const results = args.results
if (!fs.existsSync(results)) {
  showHelp()
  console.log(logger.error('\n The folder/file:'), logger.file(results), logger.error('does not exist'))
  process.exit(1)
}

const main = async () => {
  let suites = {}
  const files = getFiles(logger, args)
  for (const { file, contents } of files) {
    try {
      const res = await parse(contents)
      suites = merge.recursive(true, suites, res)
    } catch (err) {
      console.log(logger.error('Failed to parse'), logger.file(file), '\n', logger.error(err.message), '\n')
    }
  }

  const testCounts = {}
  Object.values(suites.suites).forEach((suite) => {
    Object.values(suite.tests).forEach((test) => {
      const status = test.status || 'unknown'
      testCounts[status] = testCounts[status] || 0
      testCounts[status] += 1
    })
  })
  const description = Object.entries(testCounts)
    .map(([status, count]) => {
      return `${count} ${ChangeCase.title(status)}`
    })
    .join(', ')

  if (args.console) terminal(suites, logger, description, args)
  if (args.save) render(logger, files, description, args)
}
main()
