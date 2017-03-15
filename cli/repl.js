const repl = require('repl')
const net = require('net')

module.exports = () => {
  net.createServer((socket) => {
    socket.write('Welcome')

    const r = repl.start({
      input: socket,
      output: socket,
      terminal: true,
      useGlobal: false
    })

    r.on('exit', () => {
      socket.end()
    })

    r.defineCommand('help', {
      action () {
        socket.write('help')
      }
    })

    r.context.socket = socket
  }).listen(9090)
}
