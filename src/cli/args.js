const path = require('path')
const yargs = require('yargs')

const instance = yargs
  .command('xunit-viewer', 'Renders Xunit style xml results')
  .example('xunit-viewer -r file.xml', 'a file')
  .example('xunit-viewer -r folder', 'a folder')
  .example('xunit-viewer -r folder -i *-broke.xml', 'ignore')
  .example('xunit-viewer -r folder -o my-tests.html', 'rename output')
  .example('xunit-viewer -r folder -t "My Tests"', 'change HTML title')
  .example('xunit-viewer -r folder -b https://image.png', 'change the image')
  .example('xunit-viewer -r folder -f https://image.favico', 'change the favicon')
  .example('xunit-viewer -r folder -c', 'render in console')
  .example('xunit-viewer -r folder -c -C', 'render in console, do not clear')
  .example('xunit-viewer -r folder -c -n', 'no color in console')
  .example('xunit-viewer -r folder -w', 'start watch')
  .example('xunit-viewer -r folder -w -p 5050', 'watch at 5050')
  // .example('xunit-viewer -r folder --s.s "value"', 'search suite with term "value"')

  .string('results')
  .coerce('results', (arg) => path.resolve(process.cwd(), arg))
  .alias('r', 'results')
  .describe('r', 'File/Folder of results')
  .demandOption(['results'])

  .array('ignore')
  .alias('i', 'ignore')
  .describe('i', 'Ignore patterns')

  .string('output')
  .default('output', 'index.html')
  .coerce('output', (arg) => {
    if (arg === 'false') return false
    return path.resolve(process.cwd(), arg.endsWith('.html') ? arg : `${arg}.html`)
  })
  .alias('o', 'output')
  .describe('o', 'Output filename')

  .string('title')
  .alias('t', 'title')
  .describe('t', 'HTML title e.g. "My Tests"')

  .string('brand')
  .alias('b', 'brand')
  .describe('b', 'Provide a URL with your own logo')

  .string('favicon')
  .alias('f', 'favicon')
  .describe('f', 'Provide a URL with your own favicon')

  .boolean('console')
  .alias('c', 'console')
  .describe('c', 'Render in console')

  .boolean('clear')
  .alias('C', 'clear')
  .default('C', true)
  .describe('C', 'Clears the console')

  .boolean('server')
  .default('s', false)
  .alias('s', 'server')
  .describe('s', 'Start a server and sockets for live updates')

  .boolean('no-color')
  .alias('n', 'no-color')
  .describe('n', 'No color in the console')

  .boolean('watch')
  .alias('w', 'watch')
  .describe('w', 'Re-run when a file changes')

  .number('port')
  .alias('p', 'port')
  .describe('p', 'Starts a server with sockets on that port, if no port is provided then it will run on port 3000 (or next available)')

// .string('properties.search')
// .alias('p.s', 'properties.search')
// .describe('p.s', 'pre-filter option')

// .boolean('properties.visible')
// .alias('p.v', 'properties.visible')
// .describe('p.v', 'pre-filter option')

// .string('suites.search')
// .alias('s.s', 'suites.search')
// .describe('s.s', 'pre-filter option')

// const types = ['tests']
// const statuses = ['passed', 'failure', 'skipped', 'error', 'unknown']
// const actions = ['visible']

// types.forEach(type => {
//   const firstTypeChar = type[0]
//   const searchCommand = `${type}.search`
//   const searchAlias = `${firstTypeChar}.s`

//   instance.string(searchCommand)
//     .alias(searchAlias, searchCommand)
//     .describe(searchAlias, 'pre-filter option')

//   statuses.forEach(status => {
//     const firstStatusChar = status[0]
//     actions.forEach(action => {
//       const firstActionChar = action[0]
//       const toggleCommand = `${type}.${status}.${action}`
//       const toggleAlias = `${firstTypeChar}.${firstStatusChar}.${firstActionChar}`

//       instance.boolean(toggleCommand)
//         .alias(toggleAlias, toggleCommand)
//         .describe(toggleAlias, 'pre-filter option')
//     })
//   })
// })

instance.help()

module.exports.args = instance.argv
module.exports.showHelp = instance.showHelp
