const parseString = require('xml2js-parser').parseStringSync
const changeCase = require('change-case')
const uuid = require('uuid')

const xml2js = (xml) => {
  let data = parseString(xml)

  let suites = []
  if (data.testsuites && data.testsuites.testsuite) {
    if (Array.isArray(data.testsuites.testsuite)) suites = data.testsuites.testsuite
    else suites.push(data.testsuites.testsuite)
  }

  if (data.testsuite) {
    if (Array.isArray(data.testsuite)) suites = data.testsuite
    else suites.push(data.testsuite)
  }

  if (data.testcase) {
    if (Array.isArray(data.testcase)) {
      suites = [{
        testcase: data.testcase
      }]
    } else {
      suites.push({
        testcase: [data.testcase]
      })
    }
  }

  return suites
}

const expandMeta = (thing) => {
  let meta = thing['$']
  if (meta) {
    Object.keys(meta).forEach(key => {
      thing[key] = meta[key]
    })
    delete thing['$']
  }
}

const buildProperties = (suite) => {
  let properties = {}
  if (suite.properties) {
    suite.properties
            .filter(property => {
              return typeof property !== 'string'
            })
            .forEach(property => {
              property.property.forEach(prop => {
                let meta = prop['$']
                properties[meta.name] = meta.value
              })
            })
  }
  properties._uuid = uuid.v4()
  return properties
}

const extactMessage = (thing) => {
  if (typeof thing === 'string') return
  thing.message = ''
  if (thing['_']) {
    thing.message = thing['_']
    delete thing['_']
  }
}

const extractTestCore = (test, type, status) => {
  if (test[type]) {
    test.status = status

    let core = test[type][0]
    extactMessage(core)

    if (test.message === '') {
      if (core.message) {
        test.message = core.message
      } else if (core['$']) {
        test.message = ''
        if (core['$'].message) test.message += core['$'].message
        if (core['$'].type) test.message += core['$'].type
      } else if (typeof core === 'string') {
        test.message = core
      }
    }

    delete test[type]
  }
}

const buildTest = (test) => {
  test.status = 'pass'
  test.name = 'no name'

  expandMeta(test)

  test.name = changeCase.title(test.name)

  extactMessage(test)

  extractTestCore(test, 'passed', 'pass')
  extractTestCore(test, 'passing', 'pass')
  extractTestCore(test, 'pass', 'pass')

  extractTestCore(test, 'failure', 'fail')
  extractTestCore(test, 'failed', 'fail')
  extractTestCore(test, 'failint', 'fail')
  extractTestCore(test, 'fail', 'fail')

  extractTestCore(test, 'errored', 'error')
  extractTestCore(test, 'erroring', 'error')
  extractTestCore(test, 'error', 'error')

  extractTestCore(test, 'skipped', 'skip')
  extractTestCore(test, 'skipping', 'skip')
  extractTestCore(test, 'skip', 'skip')

  test._uuid = uuid.v4()
  return test
}

const buildTests = (suite) => {
  suite.tests = suite.testcase
        .filter(test => {
          if (typeof test === 'string') return test.trim() !== ''
          return true
        })
        .map(test => {
          if (typeof test === 'string') return buildTest({'_': test})
          else return buildTest(test)
        })
  delete suite.testcase
}

const buildSuites = (suites) => {
  return suites
        .filter(suite => {
          if (typeof suite === 'string') return suite.trim() !== ''
          return true
        })
        .map(suite => {
          expandMeta(suite)
          suite.properties = buildProperties(suite)

          delete suite.tests
          delete suite.failures
          delete suite.errors
          delete suite.skipped

          suite.name = suite.name || 'No Name'
          suite.name = changeCase.title(suite.name)

          if (suite.testcase) buildTests(suite)

          if (suite.testsuite) {
            if (Array.isArray(suite.testsuite)) suite.suites = buildSuites(suite.testsuite)
            else suite.suites = buildSuites([suite.testsuite])
            delete suite.testsuite
          }

          suite.status = suite.status || 'unknown'
          let fail = false
          if (Array.isArray(suite.tests)) {
            const testsFailed = suite.tests.filter(test => {
              return test.status !== 'pass'
            }).length > 0
            if (testsFailed) fail = true
          }

          if (fail) suite.status = 'fail'

          suite.count = {
            tests: 0,
            pass: 0,
            fail: 0,
            error: 0,
            skip: 0,
            unknown: 0
          }

          if (suite.tests) {
            suite.tests.forEach(test => {
              suite.count.tests += 1
              suite.count[test.status] += 1
            })
          }

          suite.status = 'fail'
          if (suite.count.tests > 0 && suite.count.tests === suite.count.pass) suite.status = 'pass'
          if (suite.count.tests > 0 && suite.count.tests === suite.count.error) suite.status = 'error'
          if (suite.count.tests > 0 && suite.count.tests === suite.count.skip) suite.status = 'skip'
          if (suite.count.tests > 0 && suite.count.tests === suite.count.unknown) suite.status = 'unknown'

          suite._uuid = uuid.v4()
          return suite
        })
}

module.exports = {
  parse (xml) {
    let suites = xml2js(xml)
    return buildSuites(suites)
  }
}
