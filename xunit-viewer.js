const fs = require('fs')
const path = require('path')
const { showHelp } = require('./cli/args')
const Logger = require('./cli/logger')
const getFiles = require('./cli/get-files')
const terminal = require('./cli/terminal')
const render = require('./cli/render')
const watch = require('./cli/watch')
const server = require('./cli/server')
const getSuites = require('./cli/get-suites')
const getDescription = require('./cli/get-description')

module.exports = async (args) => {
  const logger = Logger(args.noColor)

  const results = args.results
  if (!fs.existsSync(results)) {
    showHelp()
    console.log(logger.error('\n The folder/file:'), logger.file(results), logger.error('does not exist'))
    process.exit(1)
  }

  const runXunitViewer = async () => {
    const files = getFiles(logger, args)
    const suites = await getSuites(logger, files)
    const description = getDescription(suites)
    if (args.console) terminal(suites, logger, description, args)
    if (args.output !== false) {
      const result = render(logger, files, description, args)
      const outputFile = path.resolve(process.cwd(), args.output)
      fs.writeFileSync(outputFile, result)
      console.log('Written to:', logger.file(outputFile))
    }
  }

  if (args.console || args.output !== false) await runXunitViewer()
  if (args.watch) {
    watch(args, async () => {
      await runXunitViewer()
    })
  }
  if (args.server || args.port) server(logger, args)
}
