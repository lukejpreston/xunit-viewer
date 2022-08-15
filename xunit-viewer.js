const fs = require('fs')
const path = require('path')

const Logger = require('./src/cli/logger')
const getFiles = require('./src/cli/get-files')
const terminal = require('./src/cli/terminal')
const render = require('./src/cli/render')
const watch = require('./src/cli/watch')
const server = require('./src/cli/server')
const getSuites = require('./src/cli/get-suites')
const getDescription = require('./src/cli/get-description')

module.exports = async (args) => {
  const logger = Logger(args.noColor)

  const results = args.results
  if (!fs.existsSync(results)) {
    const { showHelp } = require('./src/cli/args')
    showHelp()
    console.log(logger.error('\n The folder/file:'), logger.file(results), logger.error('does not exist'))
    if (!args.script) process.exit(1)
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
      if (!args.script && !args.server) process.exit(0)
    }
  }

  if (args.console || args.output !== false) await runXunitViewer()
  if (args.server || args.port) server(logger, args)
  else if (args.watch) {
    watch(args, async () => {
      await runXunitViewer()
    })
  }
}
