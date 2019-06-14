const path = require('path')
const yargs = require('yargs')

const instance = yargs
  .command('xunit-viewer', 'Renders xunit xml results into simple HTML or in the command line')
  .example('xunit-viewer -r file.xml', 'a file')
  .example('xunit-viewer -r folder', 'a folder')
  .example('xunit-viewer -r folder -o my-tests.html', 'rename output')
  .example('xunit-viewer -r folder -t "My Tests"', 'change HTML title')
  .example('xunit-viewer -r folder -c', 'render in console')
  .example('xunit-viewer -r folder -c -n', 'no color in console')
  .example('xunit-viewer -r folder -w', 'start watch')
  .example('xunit-viewer -r folder -w -p 5050', 'watch at 505')
  .example('xunit-viewer -r folder -s.s "value"', 'search suite with term "value"')
  .example('xunit-viewer -r folder -s.p.v false', 'hide all passing suites')

  .string('results')
  .coerce('results', (arg) => path.resolve(process.cwd(), arg))
  .alias('r', 'results')
  .describe('r', 'File or folder of results')

  .string('output')
  .coerce('output', (arg) => path.resolve(process.cwd(), arg.endsWith('.html') ? arg : `${arg}.html`))
  .alias('o', 'output')
  .describe('o', 'Output filename')

  .string('title')
  .alias('t', 'title')
  .describe('t', 'HTML title e.g. "My Tests"')

  .boolean('console')
  .alias('c', 'console')
  .describe('c', 'Render in console')

  .boolean('no-color')
  .alias('n', 'no-color')
  .describe('n', 'No color in the console')

  .boolean('watch')
  .alias('w', 'watch')
  .describe('w', 'Watch, includes live-reload')

  .number('port')
  .alias('p', 'port')
  .describe('p', 'Change port for watch')

  .demandOption(['r'])

const types = ['suites', 'tests', 'properties']
const statuses = ['all', 'passed', 'failure', 'skipped', 'error', 'unknown']
const actions = ['visible', 'expanded', 'raw']

types.forEach(type => {
  const firstTypeChar = type[0]
  const searchCommand = `${type}.search`
  const searchAlias = `${firstTypeChar}.s`

  instance.string(searchCommand)
    .alias(searchAlias, searchCommand)
    .describe(searchAlias, `pre-filter option`)

  statuses.forEach(status => {
    const firstStatusChar = status[0]
    actions.forEach(action => {
      const firstActionChar = action[0]
      const toggleCommand = `${type}.${status}.${action}`
      const toggleAlias = `${firstTypeChar}.${firstStatusChar}.${firstActionChar}`

      instance.boolean(toggleCommand)
        .alias(toggleAlias, toggleCommand)
        .describe(toggleAlias, 'pre-filter option')
    })
  })
})

instance.help()

console.log(instance.argv)
