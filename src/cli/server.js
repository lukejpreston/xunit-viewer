const getPort = require('get-port')
const ip = require('ip')
const getFiles = require('./get-files')
const render = require('./render')
const getSuites = require('./get-suites')
const getDescription = require('./get-description')
const watch = require('./watch')

module.exports = async (logger, args) => {
  const app = require('express')()
  const http = require('http').createServer(app)
  const io = require('socket.io')(http)

  app.get('/', async (req, res) => {
    const files = getFiles(logger, args)
    const suites = await getSuites(logger, files)
    const description = getDescription(suites)

    res.send(render(logger, files, description, args, true))
  })

  io.on('connection', function (socket) {
    watch(args, () => {
      socket.emit('update', { files: getFiles(logger, args) })
    })
  })

  const port = await getPort({ port: args.port || 3000 })
  http.listen(port, function () {
    console.log(logger.server('Listening at', `http://${ip.address()}:${port}`))
  })
}
