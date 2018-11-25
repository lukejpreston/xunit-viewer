
const filterTypes = (filter, items) => {
  if (typeof filter === 'undefined') return items
  const filterTypes = filter.split(',')
  if (filterTypes.includes('all')) return items
  return items.filter(item => filterTypes.includes(item.status))
}

const filterValue = (filter, items) => {
  if (typeof filter === 'undefined') return items
  const filterRegexp = new RegExp(filter)
  return items.filter(item => filterRegexp.test(item.name))
}

module.exports = (filter, suites) => {
  filter.types = filter.types || {}
  filter.value = filter.value || {}
  suites = filterTypes(filter.types.suites, suites)
    .map(suite => {
      suite.tests = filterTypes(filter.types.tests, suite.tests)
      return suite
    })
  suites = filterValue(filter.value.suites, suites)
    .map(suite => {
      suite.tests = filterValue(filter.value.tests, suite.tests)
      return suite
    })
  return suites
}
