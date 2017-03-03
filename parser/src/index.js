const parseString = require('xml2js-parser').parseStringSync
const Builder = require('../../builder/src')

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

const build = (suites) => {
    let builder = Builder()

    suites.forEach(suite => {
        if (suite['$']) {
            builder.suite(suite['$'])
        }

        if (suite['$'] && suite['$'].name === 'parent') {
            console.log(suite)
        }
    })

    return builder.build()
}

module.exports = {
    parse (xml) {
        let suites = xml2js(xml)
        build(suites)
        return ''
    }
}

