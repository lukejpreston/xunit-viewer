import fs from 'fs'
import path from 'path'
import './parse'
import expected from './parse-expected.json'

const parse = window.parse
const dataDir = path.resolve(__dirname, '../../data')

test('complete multi suites', async () => {
  const data = path.join(dataDir, '/test.xml')
  const result = await parse(fs.readFileSync(data).toString())
  expect(result).toEqual(expected)
})
