const clear = require('console-clear')

const statusRank = [
  'failure',
  'error',
  'passed',
  'skipped',
  'unknown'
]

module.exports = (output, logger, description, args) => {
  const { suites } = output
  if (args.clear) clear()
  Object.values(suites)
    .forEach(suite => {
      console.log('\n', logger.suite(suite.name))

      const hasProperties = Object.entries(suite.properties)
        .filter(([key]) => key !== '_visible').length > 0

      if (hasProperties) {
        Object.entries(suite.properties)
          .filter(([key]) => key !== '_visible')
          .forEach(([key, values]) => {
            if (!Array.isArray) values = [values]
            console.log('    ', logger.property(key, values))
          })
        console.log()
      }
      Object.values(suite.tests)
        .forEach((test) => {
          logger.time(test.time)
          console.log('    ', logger.test(test.status || 'unknown', test.name), test.time ? logger.time(test.time) : '')
          if (test.messages.length > 0) {
            console.log('       -', test.messages.join('\n       - '))
          }
        })
    })
  console.log()
  if (args.title) console.log(args.title)
  console.log(description)
}
