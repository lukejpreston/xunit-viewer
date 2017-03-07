const recursive = require('recursive-readdir')

module.exports = (results, ignore) => {
  ignore.push('!*.xml')

  return new Promise((resolve, reject) => {
    try {
      recursive(results, ignore, (err, files) => {
        if (err) {
          try {
            resolve([results])
          } catch (err) {
            reject(err)
          }
        }
        resolve(files)
      })
    } catch (e) {
    }
  })
}
