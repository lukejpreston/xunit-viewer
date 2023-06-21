import chokidar from 'chokidar'
import debounce from 'debounce'

export default ({ results }, cb) => {
  cb = debounce(cb)
  chokidar.watch(results)
    .on('all', (event, path) => {
      cb()
    })
}
