const fs = require('fs')
const path = require('path')
const parser = require('./')

const data = path.resolve(__dirname, '../../data')
const output = require(path.join(data, 'output.json'))

const getInput = (name) => {
    return fs.readFileSync(path.join(data, `${name}.xml`)).toString()
}

const logSuites = (suites) => {
    console.log(JSON.stringify(suites, null, 4))
}

describe('parser', () => {
    it('works', () =>{
        let input = getInput('complete_multi_suites')

        let parsed = parser.parse(input)

        expect(parsed).toEqual(output)
    })
})
