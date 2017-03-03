const parser = require('./')

const fs = require('fs')
const path = require('path')
let input = fs.readFileSync(path.resolve(__dirname, '../../data/complete_multi_suites.xml')).toString()

let output = parser.parse(input)

console.log(output)
