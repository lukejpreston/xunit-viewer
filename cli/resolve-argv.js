let options = {}

process.argv.forEach(arg => {
  if (arg.includes('--results')) options.results = arg.replace('--results=', '')
  else if (arg.includes('--ignore')) options.ignore = arg.replace('--ignore=', '').split(',')
  else if (arg.includes('--output')) options.output = arg.replace('--output=', '')
  else if (arg.includes('--title')) options.title = arg.replace('--title=', '')
  else if (arg.includes('--port')) options.port = parseInt(arg.replace('--port=', ''), 10)
  else if (arg.includes('--color')) options.color = arg.replace('--color=', '')
  else if (arg.includes('--watch')) options.watch = arg.replace('--watch=', '').replace('--watch', '')
  else if (arg.includes('--dev')) options.dev = arg.replace('--dev=', '').replace('--dev', '')

// --filter.suites.value="Suite names matching this value"
// --filter.suites.types=all,pass,fail,skip,error,unknown
// --filter.tests.value="Test names matching this value"
// --filter.tests.types=all,pass,fail,skip,error,unknown
// --filter.properties.value="Properties matching with key or value matching this value"
// --filter.properties.types=all
})

if (options.dev === '' || options.dev === 'true') options.dev = true
else options.dev = false

if (options.watch === '' || options.dev === 'true') options.watch = true
else options.watch = false

console.log(options)
