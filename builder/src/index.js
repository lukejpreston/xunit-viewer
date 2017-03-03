const changeCase = require('change-case')

const statuses = {
    passed: 'pass',
    failed: 'fail',
    errored: 'error',
    skipped: 'skip',
    pass: 'pass',
    fail: 'fail',
    error: 'error',
    skip: 'skip'
}

const defaultStatus = (status = '') => {
    status = status.toLowerCase()
    if (statuses.hasOwnProperty(status)) return statuses[status]
    return 'unknown'
}

const Builder = (previousBuilder = null, parentSuite = null) => {
    let data = []
    let currentSuite = null
    const builder = {
        suite (suite = {}) {
            if (currentSuite !== null) {
                let childBuilder = Builder(builder, currentSuite)
                childBuilder.suite(suite)
                return childBuilder
            }

            suite.name = suite.name || 'No Name'
            suite.name = changeCase.title(suite.name)
            suite.status = defaultStatus(suite.status)

            if (currentSuite !== null) data.push(currentSuite)
            currentSuite = suite
            currentSuite.tests = []

            return builder
        },
        endSuite () {
            if (previousBuilder) {
                parentSuite.suites = parentSuite.suites || []
                parentSuite.suites.push(currentSuite)
                return previousBuilder
            }
            return builder
        },
        test (test = {}) {
            test.name = test.name || 'No Name'
            test.name = changeCase.title(test.name)
            test.status = defaultStatus(test.status)

            if (currentSuite === null) builder.suite({ name: 'no matching suite'})

            currentSuite.tests.push(test)

            return builder
        },
        property (properties = {}) {
            if (currentSuite === null) builder.suite({ name: 'no matching suite'})

            currentSuite.properties = currentSuite.properties || {}
            Object.keys(properties).forEach(key => {
                currentSuite.properties[key] = properties[key]
            })

            return builder
        },
        build () {
            if (currentSuite !== null) data.push(currentSuite)
            return data
        }
    }

    return builder
}

module.exports = Builder
