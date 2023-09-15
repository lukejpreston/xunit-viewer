import express from 'express'
import getPort from 'get-port'
import HTTP from 'http'
import ip from 'ip'
import { Server } from 'socket.io'
import getDescription from './get-description.js'
import getFiles from './get-files.js'
import getSuites from './get-suites.js'
import render from './render.js'
import watch from './watch.js'

export default async (logger, args) => {
  const app = express()
  const http = HTTP.createServer(app)
  const io = new Server(http)

  app.get('/', async (req, res) => {
    const files = await getFiles(logger, args)
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
