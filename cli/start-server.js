const express = require('express')
const http = require('http')
const socketIo = require('socket.io')
const render = require('./render')
const resolveFiles = require('./resolve-files')
const parseFiles = require('./parse-files')

module.exports = (options) => {
  const app = express()
  var server = http.createServer(app)

  if (options.watch) {
    const io = socketIo(server)

    io.on('connection', (socket) => {
      resolveFiles(options)
        .then(files => {
          parseFiles(files)
            .then(suites => {
              socket.emit('suites', suites)
            })
        })
    })
  }

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
