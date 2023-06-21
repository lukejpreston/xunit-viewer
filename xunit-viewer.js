import fs from 'fs'
import path from 'path'
import getDescription from './src/cli/get-description.js'
import getFiles from './src/cli/get-files.js'
import getSuites from './src/cli/get-suites.js'
import Logger from './src/cli/logger.js'
import render from './src/cli/render.js'
import server from './src/cli/server.js'
import terminal from './src/cli/terminal.js'
import watch from './src/cli/watch.js'

export default async (args) => {
  const logger = Logger(args.noColor)

  const results = args.results
  if (!fs.existsSync(results)) {
    const { showHelp } = import('./src/cli/args.js')
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
