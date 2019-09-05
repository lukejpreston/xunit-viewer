const chokidar = require('chokidar')
const debounce = require('debounce')

module.exports = ({ results }, cb) => {
  cb = debounce(cb)
  chokidar.watch(results)
    .on('all', (event, path) => {
      cb()
    })
}
