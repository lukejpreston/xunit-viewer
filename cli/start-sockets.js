const socketIo = require('socket.io')
const resolveFiles = require('./resolve-files')
const parseFiles = require('./parse-files')
const nodeWatch = require('node-watch')
const path = require('path')
const postcss = require('./postcss')
const fs = require('fs-extra')

const componet = path.resolve(__dirname, '../component')
const dist = path.resolve(__dirname, '../dist')

module.exports = (server, options) => {
  const io = socketIo(server)

  io.on('connection', (socket) => {
    resolveFiles(options)
      .then(files => {
        parseFiles(files)
          .then(suites => {
            socket.emit('suites', suites)
          })
      })

    nodeWatch([componet, dist], (file) => {
      if (file.includes('css')) {
        postcss()
          .then(style => {
            socket.emit('reload:style', style)
          })
      }

      if (file.includes('index.min.js') && fs.existsSync(file)) {
        socket.emit('reload:all')
      }
    })
  })
}
