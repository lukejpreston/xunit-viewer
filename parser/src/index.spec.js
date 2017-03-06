const fs = require('fs')
const path = require('path')
const parser = require('./')

const getInput = (name) => {
    return fs.readFileSync(path.resolve(__dirname, `../../data/${name}.xml`)).toString()
}

const logSuites = (suites) => {
    console.log(JSON.stringify(suites, null, 4))
}

describe('parser', () => {
    it('works', () =>{
        let input = getInput('complete_multi_suites')
        let output = parser.parse(input)

        logSuites(output)
    })
})
