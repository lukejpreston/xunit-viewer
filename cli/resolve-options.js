const fs = require('fs')
const path = require('path')
const detectPort = require('detect-port')
const toLaxTitleCase = require('titlecase').toLaxTitleCase

const extractResults = (results = process.cwd()) => {
  if (typeof results !== 'string') results = process.cwd()
  if (!path.isAbsolute(results)) results = path.resolve(process.cwd(), results)
  return results
}

const extractOutput = (output = false) => {
  if (output !== false && typeof output !== 'string') output = false
  if (output !== false && output !== '' && output !== 'console') {
    if (!path.isAbsolute(output)) output = path.resolve(process.cwd(), output)
    if (fs.existsSync(output) && fs.lstatSync(output).isDirectory()) output = path.join(output, 'xunit-viewer.html')
  }
  return output
}

const extractIgnore = (ignore = []) => {
  if (typeof ignore === 'string') ignore = [ignore]
  if (!Array.isArray(ignore)) ignore = []
  if (ignore.some(element => { return typeof element !== 'string' })) throw new Error('ignore needs to be either an Array(<string>)')
  ignore.push('!*.xml')
  return ignore
}

const extractWatch = (watch = false) => {
  return watch !== false
}

const extractDev = (dev = false) => {
  return dev !== false
}

const extractTerminal = (terminal = false) => {
  return terminal !== false
}

const extractPort = (port = false) => {
  if (typeof port !== 'boolean' && typeof port !== 'number') return false
  return port
}

const extarctTitle = (title = 'Xunit Viewer') => {
  if (typeof title !== 'string' && typeof title !== 'number') title = 'Xunit Viewer'
  if (typeof title === 'number') title = '' + title
  return toLaxTitleCase(title)
}

const extractFilter = (filter = {}) => {
  filter.search = filter.search || {}
  filter.search.suites = filter.search.suites || ''
  filter.search.tests = filter.search.tests || ''
  filter.search.properties = filter.search.properties || ''

  filter.hidden = filter.hidden || {}
  filter.hidden.suites = filter.hidden.suites || []
  filter.hidden.tests = filter.hidden.tests || []
  filter.hidden.properties = filter.hidden.properties || []

  filter.types = filter.types || {}
  filter.types.suites = (filter.types.suites || '').split(',')
  filter.types.tests = (filter.types.tests || '').split(',')

  filter.value = filter.value || {}
  filter.value.suites = new RegExp(filter.value.suites || '.*')
  filter.value.tests = new RegExp(filter.value.tests || '.*')

  return filter
}

module.exports = ({ results, ignore, output, terminal, title, port, watch, filter, dev }) => {
  results = extractResults(results)
  output = extractOutput(output)
  terminal = extractTerminal(terminal)
  ignore = extractIgnore(ignore)
  watch = extractWatch(watch)
  dev = extractDev(dev)
  filter = extractFilter(filter)
  port = extractPort(port)
  title = extarctTitle(title)

  let options = (port) => {
    return new Promise(resolve => {
      resolve({ results, ignore, output, terminal, title, port, watch, filter, dev })
    })
  }

  if (port !== false) {
    if (typeof port === 'number') {
      return detectPort(port)
        .then(port => {
          return options(port)
        })
    }
    return detectPort()
      .then(port => {
        return options(port)
      })
  }

  return options(port)
}
