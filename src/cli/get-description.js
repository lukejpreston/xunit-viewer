module.exports = (suites) => {
  const testCounts = {}
  Object.values(suites.suites).forEach((suite) => {
    Object.values(suite.tests).forEach((test) => {
      const status = test.status || 'unknown'
      testCounts[status] = testCounts[status] || 0
      testCounts[status] += 1
    })
  })
  return Object.entries(testCounts)
    .map(([status, count]) => {
      return `${count} ${status}`
    })
    .join(', ')
}
