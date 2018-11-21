const clone = require('clone')

module.exports = (suites, hidden) => {
  suites = clone(suites)
  suites = suites.filter(suite => {
    return hidden.suites.includes(suite.status)
  })

  suites.forEach(suite => {
    if (suite.tests) {
      suite.tests = suite.tests.filter(test => {
        return hidden.tests.includes(test.status)
      })
    }

    if (hidden.properties[0] === 'all') delete suite.properties
  })

  return suites
}
