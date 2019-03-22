const xml2js = require('xml2js')

const parseString = (xml) => new Promise((resolve, reject) => {
  xml2js.parseString(xml, (err, result) => {
    if (err) reject(new Error(err))
    else resolve(result)
  })
})

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

const extarctSuiteMeta = (output, testsuite) => {
  const meta = testsuite.$ || {}
  const name = meta.name || 'No Name'
  const id = btoa(name)
  const suite = output.suites[id] || {}
  suite.tests = suite.tests || {}
  suite.id = id
  suite.name = name
  suite.time = meta.time || 0
  return suite
}

const extractSuite = (output, testsuite) => {
  const suite = extarctSuiteMeta(output, testsuite)
  if (typeof testsuite.properties !== 'undefined') extractProperties(suite, testsuite)
  output.suites[suite.id] = suite
}

const extract = (output, testsuites) => {
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
  const testsuites = result.testsuites.testsuite

  extract(output, testsuites)

  return output
}

export default parse
