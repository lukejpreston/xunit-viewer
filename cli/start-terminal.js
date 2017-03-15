const resolveFiles = require('./resolve-files')
const parseFiles = require('./parse-files')
const nodeWatch = require('node-watch')
const chalk = require('chalk')
const extractStats = require('./extarct-stats')

const symbols = {
  pass: '✓',
  fail: '✕',
  skip: '○',
  unknown: '?',
  error: '⚠'
}

const colors = {
  pass: chalk.green,
  fail: chalk.red,
  skip: chalk.gray,
  unknown: chalk.cyan,
  error: chalk.yellow
}

let logTest = (test, indentation) => {
  let indent = ''
  for (let i = 0; i < indentation; i++) indent += '  '
  let color = colors[test.status].bold
  let symbol = symbols[test.status]
  console.log(`${indent}${color(symbol)} ${test.name}`)
  if (test.message) {
    let message = test.message.split('\n').map(line => `${indent}    ${chalk.dim(line)}`).join('\n')
    console.log(message)
  }
}

let logProperties = (properties, indentation) => {
  console.log()
  console.log(chalk.underline('Properties:'))

  let indent = ''
  for (let i = 0; i < indentation; i++) indent += '  '

  Object.keys(properties).filter(key => key !== '_uuid').forEach(key => {
    console.log(`${indent}${chalk.bold(key)}: ${properties[key]}`)
  })
}

let logSuite = (suite, indentation) => {
  console.log()
  let indent = ''
  for (let i = 0; i < indentation; i++) indent += '  '
  let color = colors[suite.status].bold
  let symbol = symbols[suite.status]
  console.log(`${indent}${color(symbol)} ${chalk.bold(suite.name)}`)

  let tests = suite.tests || []
  tests.forEach(test => {
    logTest(test, indentation + 1)
  })

  if (suite.properties && Object.keys(suite.properties).length !== 1) logProperties(suite.properties, indentation)

  if (suite.suites) {
    suite.suites.forEach(suite => {
      logSuite(suite, indentation + 1)
    })
  }
}

let getName = (stat) => {
  let name = stat.name + ':'
  let minLength = 11
  while (name.length < minLength) name += ' '
  return chalk.bold(name)
}

let getTotal = (stat, max) => {
  let total = stat.total + ''
  while (total.length < max) total += ' '
  return chalk.bold(total)
}

let logStat = (stat, maxTotal) => {
  let message = `${getName(stat)} ${getTotal(stat, maxTotal)} total`

  if (stat.data) {
    let extra = stat.data.map(d => {
      let color = colors[d.type]
      return `${color(d.symbol)}  ${getTotal(d, maxTotal)} ${color(d.type)}`
    }).join(', ')
    message += ', ' + extra
  }

  console.log(message)
}

let logStats = (suites) => {
  let stats = extractStats(suites, {
    suites: '',
    tests: '',
    properties: ''
  })

  let maxTotal = Math.max(stats[0].total, stats[1].total, stats[2].total) + ''
  maxTotal = maxTotal.length

  console.log()
  logStat(stats[0], maxTotal)
  logStat(stats[1], maxTotal)
  logStat(stats[2], maxTotal)
}

const log = (options) => {
  console.log('\x1Bc')
  console.log(chalk.yellow.bold('\n\n\nchanges detected, clearing console\n\n\n'))

  setTimeout(() => {
    resolveFiles(options)
      .then(files => {
        parseFiles(files)
          .then(suites => {
            suites.forEach(suite => {
              logSuite(suite, 0)
            })
            logStats(suites)
            console.log(chalk.cyan.bold('\nDone:', new Date()))
          })
        .catch(err => {
          console.error(err.stack)
        })
      })
    .catch(err => {
      console.error(err.stack)
    })
  }, 1000)
}

module.exports = (options) => {
  log(options)
  if (options.watch === false) {
    log(options)
  } else {
    nodeWatch(options.results, () => {
      log(options)
    })
  }
}
