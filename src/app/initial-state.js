export default {
  hero: {
    burger: false,
    dropdown: false,
    fastFilter: 0
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
      expanded: true,
      raw: true
    },
    passed: {
      expanded: true,
      raw: true
    },
    skipped: {
      expanded: true,
      raw: true
    },
    failure: {
      expanded: true,
      raw: true
    },
    error: {
      expanded: true,
      raw: true
    },
    unknown: {
      expanded: true,
      raw: true
    }
  }
}
