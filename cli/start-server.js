const express = require('express')
const http = require('http')
const startSockets = require('./start-sockets')

module.exports = (options) => {
  const app = express()
  var server = http.createServer(app)

  if (options.watch) startSockets(options, server)

  app.get('/', (req, res) => {
    res.send('hello')
  })

  server.listen(options.port, () => {
    console.log(`started listening http://localhost:${options.port}`)
  })
}
