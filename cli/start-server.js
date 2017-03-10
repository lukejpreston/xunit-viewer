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
    let send = 'LOADING... <script>setTimeout(function () { window.location.reload() }, 500)</script>'
    app.get('/', (req, res) => {
      res.send(send)
    })
    render(options)
      .then(result => {
        send = result
      })
      .catch(err => {
        if (err.file) send = `<span>File: ${err.file}</span><pre>${err.stack}</pre>`
        else send = `<pre>${err.stack}</pre>`
      })
  }

  server.listen(options.port, () => {
    console.log(`started listening http://localhost:${options.port}`)
  })
}
