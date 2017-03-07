const detectPort = require('detect-port')

module.exports = (port) => {
  if (port === false) {
    return new Promise((resolve) => {
      resolve(port)
    })
  }

  if (typeof port === 'number') return detectPort(port)
  return detectPort()
}
