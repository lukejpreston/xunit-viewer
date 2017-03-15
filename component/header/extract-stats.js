import iconMap from '../icon-map'
import searchSuites from '../search-suites'

export default (suites, search) => {
  let hasSuites = suites.length > 0
  let hasTests = false
  let hasProperties = false
  suites.forEach(suite => {
    if (suite.tests) hasTests = true
    if (suite.properties) hasProperties = true
  })

  suites = searchSuites(suites, search)

  let stats = {
    suites: {
      name: 'Suites',
      type: 'suites',
      total: suites.length,
      data: []
    },
    tests: {
      name: 'Tests',
      type: 'tests',
      total: 0,
      data: []
    },
    properties: {
      name: 'Properties',
      type: 'properties',
      total: 0
    }
  }

  let count = {
    pass: {
      suites: 0,
      tests: 0
    },
    fail: {
      suites: 0,
      tests: 0
    },
    error: {
      suites: 0,
      tests: 0
    },
    skip: {
      suites: 0,
      tests: 0
    },
    unknown: {
      suites: 0,
      tests: 0
    }
  }

  let updateCount = (type, group) => {
    if (count[type][group] > 0) {
      stats[group].data.push({
        type,
        total: count[type][group],
        icon: iconMap[type]
      })
    }
  }

  suites.forEach(suite => {
    if (count.hasOwnProperty(suite.status)) count[suite.status].suites += 1
    else count.unknown.suites += 1

    if (suite.tests) {
      stats.tests.total += suite.tests.length
      suite.tests.forEach(test => {
        if (count.hasOwnProperty(test.status)) count[test.status].tests += 1
        else count.unknown.tests += 1
      })
    }

    if (suite.properties) stats.properties.total += Object.keys(suite.properties).length
  })

  updateCount('pass', 'suites')
  updateCount('pass', 'tests')
  updateCount('fail', 'suites')
  updateCount('fail', 'tests')
  updateCount('error', 'suites')
  updateCount('error', 'tests')
  updateCount('skip', 'suites')
  updateCount('skip', 'tests')
  updateCount('unknown', 'suites')
  updateCount('unknown', 'tests')

  let result = []
  if (hasSuites) result.push(stats.suites)
  if (hasTests) result.push(stats.tests)
  if (hasProperties) result.push(stats.properties)
  return result
}
