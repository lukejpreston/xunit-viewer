const filterTypes = (filter, items) => {
  if (typeof filter === 'undefined' || filter.length === 0 || filter.includes('all')) return items
  return (items || []).filter(item => filter.includes(item.status))
}

const filterValue = (filter, items) => {
  if (typeof filter === 'undefined') return items
  return (items || []).filter(item => filter.test(item.name))
}

module.exports = (filter, suites) => {
  return filterValue(filter.value.suites,
    filterTypes(filter.types.suites, suites).map(suite => {
      suite.tests = filterTypes(filter.types.tests, suite.tests)
      return suite
    })).map(suite => {
      suite.tests = filterValue(filter.value.tests, suite.tests)
      return suite
    }).filter(suite => suite.tests.length > 0)
}
