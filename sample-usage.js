const xunitViewer = require('./xunit-viewer')

xunitViewer({
  server: false,
  results: 'data',
  ignore: ['_thingy', 'invalid'],
  title: 'Xunit View Sample Tests',
  output: 'output.html'
})
