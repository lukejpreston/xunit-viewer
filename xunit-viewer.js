const fs = require('fs')
const merge = require('merge')
const { showHelp } = require('./cli/args')
const Logger = require('./cli/logger')
const getFiles = require('./cli/get-files')
const parse = require('./cli/parse')
const terminal = require('./cli/terminal')
const render = require('./cli/render')
const ChangeCase = require('change-case')
const watch = require('./cli/watch')

module.exports = async (args) => {
  const logger = Logger(args.noColor)

  const results = args.results
  if (!fs.existsSync(results)) {
    showHelp()
    console.log(logger.error('\n The folder/file:'), logger.file(results), logger.error('does not exist'))
    process.exit(1)
  }

  const getSuites = async (files) => {
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

  const getTestCounts = (suites) => {
    const testCounts = {}
    Object.values(suites.suites).forEach((suite) => {
      Object.values(suite.tests).forEach((test) => {
        const status = test.status || 'unknown'
        testCounts[status] = testCounts[status] || 0
        testCounts[status] += 1
      })
    })
    return testCounts
  }

  const getDescription = (testCounts) => {
    return Object.entries(testCounts)
      .map(([status, count]) => {
        return `${count} ${ChangeCase.title(status)}`
      })
      .join(', ')
  }

  const runXunitViewer = async () => {
    const files = getFiles(logger, args)
    const suites = await getSuites(files)
    const testCounts = getTestCounts(suites)
    const description = getDescription(testCounts)
    if (args.console) terminal(suites, logger, description, args)
    if (args.save) render(logger, files, description, args)
  }

  await runXunitViewer()
  if (args.watch) {
    watch(args, async () => {
      await runXunitViewer()
    })
  }
}
