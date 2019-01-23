const socketIo = require('socket.io')
const resolveFiles = require('./resolve-files')
const parseFiles = require('./parse-files')
const nodeWatch = require('node-watch')
const path = require('path')
const postcss = require('./postcss')

const componet = path.resolve(__dirname, '../component')

module.exports = (server, options) => {
  const io = socketIo(server)

  if (options.dev) {
    io.emit('reload', { style: false, code: true })
    nodeWatch([componet], (file) => {
      if (file.includes('css')) {
        postcss()
          .then(style => {
            io.emit('reload', { style, code: false })
          })
      } else {
        io.emit('reload', { style: false, code: true })
      }
    })
  }

  io.on('connection', (socket) => {
    resolveFiles(options)
      .then(files => {
        parseFiles(files)
          .then(suites => {
            socket.emit('suites', suites)
          })
      })
  })

  if (options.watch) {
    nodeWatch(options.results, () => {
      resolveFiles(options)
        .then(files => {
          parseFiles(files)
            .then(suites => {
              io.emit('suites', suites)
            })
        })
    })
  }
}
