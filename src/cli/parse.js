const xml2js = require('xml2js')

const parseString = (xml) => new Promise((resolve, reject) => {
  xml2js.parseString(xml, (err, result) => {
    if (err) reject(new Error(err))
    else resolve(result)
  })
})

const hashCode = (str) => {
  var hash = 0
  if (str.length === 0) return hash
  for (var i = 0; i < str.length; i++) {
    var char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash
  }
  return hash
}

const extarctSuiteMeta = (output, testsuite) => {
  const meta = testsuite.$ || {}
  const name = meta.name || 'No Name'
  const id = hashCode(name)
  const suite = output.suites[id] || {}
  suite.tests = suite.tests || {}
  suite.systemOut = suite.systemOut || []
  suite.properties = suite.properties || {
    _visible: true
  }

  Object.entries(meta).forEach(([key, value]) => {
    if (!['errors', 'failures', 'name', 'skipped', 'tests', 'time'].includes(key)) {
      suite.properties[key] = suite.properties[key] || []
      suite.properties[key].push(value)
    }
  })

  suite.id = id
  suite.name = name
  suite.time = meta.time || 0
  return suite
}

const extractProperties = (suite, testsuite) => {
  suite.properties = suite.properties || {}
  testsuite.properties.forEach(property => {
    if (typeof property === 'string') {
      property = property.trim()
      if (property !== '') {
        suite.properties['No Name'] = suite.properties['No Name'] || []
        suite.properties['No Name'].push(property)
      }
    } else {
      property.property.forEach(property => {
        const meta = property.$ || {}
        const name = meta.name || 'No Name'
        let value = meta.value || property._
        if (typeof property === 'string') value = property
        value = value || ''
        value = value.trim()
        suite.properties[name] = suite.properties[name] || []
        if (value) {
          suite.properties[name].push(value)
        }
      })
    }
  })
}

const extractTestMessages = (test, messages) => {
  messages.forEach(body => {
    const is_ = typeof body._ === 'string'
    const is$Message = typeof body.$ !== 'undefined' && ('message' in body.$)
    const is$Type = typeof body.$ !== 'undefined' && ('type' in body.$)
    const isString = typeof body === 'string'

    if (is_) test.messages.push(body._.trim())
    if (is$Message) test.messages.push(body.$.message.trim())
    if (is$Type) test.messages.push(body.$.type.trim())
    if (isString) test.messages.push(body.trim())
  })
}

const extractTests = (output, suite, testcases) => {
  suite.tests = suite.tests || {}
  testcases.forEach(testcase => {
    const meta = testcase.$ || {}
    const name = meta.name || 'No Name'
    const time = meta.time || 0
    const id = hashCode(name)

    const test = suite.tests[id] || { id, name, messages: [], visible: true }
    test.time = time
    if (typeof testcase === 'string') test.messages.push(testcase.trim())
    if (testcase._) test.messages.push(testcase._.trim())
    if (meta.message) test.messages.push(testcase.$.message.trim())
    if (typeof testcase.properties !== 'undefined') {
      extractProperties(test, testcase)
      delete testcase.properties
    }

    if (typeof testcase !== 'string') {
      const keys = Object.keys(testcase).filter(key => key !== '$' && key !== '_' && key !== 'testcase')
      let status = keys[0]
      if (status) extractTestMessages(test, testcase[status])
      if (status === 'system-out') status = 'passed'
      test.status = status || 'passed'
    }

    test.messages = test.messages.filter(message => message !== '')

    suite.tests[id] = test
    if (typeof testcase.testcase !== 'undefined') extractTests(output, suite, testcase.testcase)
    if (typeof testcase.testsuite !== 'undefined') extractSuite(output, testcase.testsuite)
  })
}

const extractSystemOut = (suite, testsuite) => {
  suite.systemOut = suite.systemOut || []
  let systemOut = testsuite['system-out']
  if (!Array.isArray(systemOut)) systemOut = [systemOut]
  suite.systemOut = suite.systemOut.concat(systemOut)
}

const extractSuite = (output, testsuites) => {
  if (!Array.isArray(testsuites)) testsuites = [testsuites]
  testsuites.forEach(testsuite => {
    const suite = extarctSuiteMeta(output, testsuite)
    if (typeof testsuite.properties !== 'undefined') extractProperties(suite, testsuite)
    if (typeof testsuite.testcase !== 'undefined') extractTests(output, suite, testsuite.testcase)
    if (typeof testsuite['system-out'] !== 'undefined') extractSystemOut(suite, testsuite)
    output.suites[suite.id] = suite
  })
}

const extract = (output, testsuites) => {
  if (!Array.isArray(testsuites)) testsuites = [testsuites]
  testsuites.forEach(testsuite => {
    extractSuite(output, testsuite)
    if (typeof testsuite.testsuite !== 'undefined') extract(output, testsuite.testsuite)
  })
}

const parse = async (xml) => {
  const output = {
    suites: {}
  }
  const result = await parseString(xml)
  if (result.testsuites) {
    const testsuites = result.testsuites.testsuite
    extract(output, testsuites)
  } else if (result.testsuite) {
    extract(output, result.testsuite)
  }

  for (const value of Object.values(output.suites)) {
    value._visible = Object.keys(value.tests).length > 0 || Object.keys(value.properties).filter(prop => prop !== '_visible').length > 0
    value.systemOut = value.systemOut.map(value => value.trim())
  }
  return output
}

if (typeof window !== 'undefined') window.parse = parse
else {
  module.exports = parse
}
