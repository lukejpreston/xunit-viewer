const express = require('express')
const http = require('http')
const startSockets = require('./start-sockets')
const render = require('./render')

module.exports = (options) => {
  const app = express()
  var server = http.createServer(app)

  if (options.watch) startSockets(server, options)

  if (options.dev) {
    app.get('/', (req, res) => {
      render(options)
        .then(result => {
          res.send(result)
        })
        .catch(err => {
          if (err.file) res.send(`<span>File: ${err.file}</span><pre>${err.stack}</pre>`)
          else res.send(`<pre>${err.stack}</pre>`)
        })
    })
  } else {
    render(options)
      .then(result => {
        app.get('/', (req, res) => {
          res.send(result)
        })
      })
      .catch(err => {
        app.get('/', (req, res) => {
          if (err.file) res.send(`<span>File: ${err.file}</span><pre>${err.stack}</pre>`)
          else res.send(`<pre>${err.stack}</pre>`)
        })
      })
  }

  server.listen(options.port, () => {
    console.log(`started listening http://localhost:${options.port}`)
  })
}
