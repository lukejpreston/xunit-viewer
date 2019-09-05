const getPort = require('get-port')
const ip = require('ip')
const Koa = require('koa')
const SocketIO = require('socket.io')
const getFiles = require('./get-files')
const render = require('./render')
const getSuites = require('./get-suites')
const getDescription = require('./get-description')
const watch = require('./watch')

const app = new Koa()

module.exports = async (logger, args) => {
  const io = SocketIO(app)
  io.on('connection', (socket) => {
    watch(args, async () => {
      socket.emit('update', { files: getFiles(logger, args) })
    })
  })

  app.use(async ctx => {
    const files = getFiles(logger, args)
    const suites = await getSuites(logger, files)
    const description = getDescription(suites)
    ctx.body = render(logger, files, description, args)
  })

  const port = await getPort({ port: args.port || 3000 })

  app.listen(port)
  console.log(logger.server('Listening at', `http://${ip.address()}:${port}`))
}
