export default (query = {}) => {
  const passed = ('passed' in query && query.passed) || false
  const skipped = ('skipped' in query && query.skipped) || false
  const error = ('error' in query && query.error) || false
  const failure = ('failure' in query && query.failure) || false
  const unknown = ('unknown' in query && query.unknown) || false

  let fastFilter = 3
  if (passed && skipped && error && failure && unknown) fastFilter = 2
  else if (passed && skipped && !error && !failure && !unknown) fastFilter = 1
  else if (!passed && !skipped && error && failure && unknown) fastFilter = 0

  return {
    hero: {
      burger: false,
      dropdown: false,
      fastFilter
    },
    printMode: false,
    error: null,
    suites: {},
    currentSuites: {},
    menuActive: false,
    suiteOptionsActive: false,
    testOptionsActive: false,
    propertiesOptionsActive: false,
    activeFiles: false,
    suitesExpanded: true,
    suitesEmpty: true,
    propertiesExpanded: {
      all: true,
      suites: true,
      tests: true
    },
    propertiesVisible: {
      all: true,
      suites: true,
      tests: true
    },
    testToggles: {
      all: {
        visible: passed && skipped && error && failure && unknown,
        expanded: false,
        raw: false
      },
      passed: {
        visible: passed,
        expanded: false,
        raw: false
      },
      failure: {
        visible: failure,
        expanded: true,
        raw: true
      },
      error: {
        visible: error,
        expanded: true,
        raw: true
      },
      skipped: {
        visible: skipped,
        expanded: false,
        raw: false
      },
      unknown: {
        visible: unknown,
        expanded: true,
        raw: true
      }
    }
  }
}
