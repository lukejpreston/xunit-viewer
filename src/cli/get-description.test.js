import fs from 'fs'
import path from 'path'
import './parse'

const parse = window.parse

const dataDir = path.resolve(__dirname, '../../data')

const getDescription = require('./get-description')

test('get description', async () => {
  const data = path.join(dataDir, '/test.xml')
  const parsed = await parse(fs.readFileSync(data).toString())
  const result = getDescription(parsed)
  expect(result).toBe('13 passed, 2 failure, 1 error, 1 unknown, 1 skipped')
})
