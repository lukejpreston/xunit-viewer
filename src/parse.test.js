import fs from 'fs'
import path from 'path'
import parse from './parse'

const dataDir = path.resolve(__dirname, '../data')

test('complete multi suites', async () => {
  const data = path.join(dataDir, '/test.xml')
  const result = await parse(fs.readFileSync(data).toString())
  console.log(JSON.stringify(result, null, 2))
})
