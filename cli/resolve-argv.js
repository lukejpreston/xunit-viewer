const map = {
  passed: 'pass',
  passing: 'pass',
  pass: 'pass',
  failure: 'fail',
  failed: 'fail',
  failint: 'fail',
  fail: 'fail',
  errored: 'error',
  erroring: 'error',
  error: 'error',
  skipped: 'skip',
  skipping: 'skip',
  skip: 'skip',
  all: 'all'
}

module.exports = () => {
  let options = {
    filter: {}
  }

  process.argv.forEach(arg => {
    if (arg.includes('--results')) options.results = arg.replace('--results=', '')
    else if (arg.includes('--ignore')) options.ignore = arg.replace('--ignore=', '').split(',')
    else if (arg.includes('--output')) options.output = arg.replace('--output=', '')
    else if (arg.includes('--title')) options.title = arg.replace('--title=', '')
    else if (arg.includes('--port')) options.port = parseInt(arg.replace('--port=', ''), 10)
    else if (arg.includes('--color')) options.color = arg.replace('--color=', '')
    else if (arg.includes('--watch')) options.watch = arg.replace('--watch=', '').replace('--watch', '')
    else if (arg.includes('--dev')) options.dev = arg.replace('--dev=', '').replace('--dev', '')
    else if (arg.includes('--terminal')) options.terminal = arg.replace('--terminal=', '').replace('--terminal', '')

    if (arg.includes('--filter')) {
      arg = arg.replace('--filter', '')
      let split = arg.split('=')

      let keys = split[0].split('.')
      let thing = keys[1]
      let filter = keys[2]
      let value = split[1]
      if (filter === 'hidden') {
        value = split[1].split(',')
        value.map(v => {
          if (!map.hasOwnProperty(v)) return 'unknown'
          return map[v]
        })
      }

      options.filter[filter] = options.filter[filter] || {}
      options.filter[filter][thing] = value
    }
  })

  if (options.dev === '' || options.dev === 'true') options.dev = true
  else options.dev = false

  if (options.watch === '' || options.dev === 'true') options.watch = true
  else options.watch = false

  return options
}
