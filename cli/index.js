const changeCase = require('change-case')
const detectPort = require('detect-port')
const recursive = require('recursive-readdir')
const path = require('path')
const parseFiles = require('./parse-files')
const fs = require('fs-extra')

const resolvePort = (port) => {
  if (port === false) {
    return new Promise((resolve) => {
      resolve(port)
    })
  }

  if (typeof port === 'number') return detectPort(port)
  return detectPort()
}

const resolveFiles = (results, ignore) => {
  results = results || process.cwd()

  if (!path.isAbsolute(results)) results = path.resolve(process.cwd(), results)

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

const concat = (port, results, ignore) => {
  return resolveFiles(results, ignore).then(files => {
    return new Promise(resolve => {
      resolve({files, port})
    })
  })
}

module.exports = {
  run ({
        port = false,
        results = '',
        ignore = [],
        save = '',
        title = 'Xunit Viewer'
    }) {
    title = changeCase.title(title)

    resolvePort(port)
      .then(port => {
        return concat(port, results, ignore)
      })
      .then(obj => {
        return parseFiles(obj.files)
      })
      .then(results => {
        console.log(results)
      })
      .catch(err => {
        console.error(err.file)
        console.error(err.message)
      })

    // console.log('x read the xml or folder of xml')
    // console.log('x parse the xml')
    // console.log('x render the html')
    // console.log('x save html')
    // console.log('x listen to xml or folder of xml - push changes using sockets')
  }
}
