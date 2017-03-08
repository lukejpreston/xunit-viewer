const fs = require('fs')
const path = require('path')
const detectPort = require('detect-port')

module.exports = ({ results = '', ignore = [], save = false, title = 'Xunit Viewer', port = false, watch = false, terminal = false, filter = {}, hide = {} }) => {
  if (results === '') results = process.cwd()
  else if (!path.isAbsolute(results)) results = path.resolve(process.cwd(), results)

  if (save !== false && save !== '') {
    if (!path.isAbsolute(save)) save = path.resolve(process.cwd(), save)

    if (fs.existsSync(save) && fs.lstatSync(save).isDirectory()) save = path.join(save, 'xunit-viewer.html')
  }

  ignore.push('!*.xml')

  let options = (port) => {
    return new Promise(resolve => {
      resolve({ results, ignore, save, title, port, watch, terminal, filter, hide })
    })
  }

  if (port !== false) {
    if (typeof port === 'number') {
      return detectPort(port).then(port => {
        return options(port)
      })
    }
    return detectPort().then(port => {
      return options(port)
    })
  }

  return options(port)
}
