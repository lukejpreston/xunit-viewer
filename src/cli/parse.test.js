import fs from 'fs'
import path from 'path'
import './parse'
const parse = window.parse

const dataDir = path.resolve(__dirname, '../../data')

const expected = require('./parse-expected.json')

test('complete multi suites', async () => {
  const data = path.join(dataDir, '/test.xml')
  const result = await parse(fs.readFileSync(data).toString())
  expect(result).toEqual(expected)
})
