module.exports = (port) => {
  var app = require('express')()
  var server = require('http').createServer(app)
  var io = require('socket.io')(server)

//   io.on('connection', function (client) {
//     client.emit('event', { some: 'data' })
//   })

  app.get('/', (req, res) => {
    res.send("<script src='/socket.io/socket.io.js'></script><script>var socket = io(); socket.on('connect', function(){console.log('connected')}); socket.on('event', function(data){console.log('event')});</script>")
  })

  server.listen(port, () => {
    console.log(`started listening http://localhost:${port}`)
  })
}
