import fs from 'fs'
import path from 'path'
import getFiles from './get-files'
import getSuites from './get-suites'
import parse from './parse'
// const parse = window.parse

import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const logger = {
  warning: input => input,
  file: input => input,
  error: input => input
}

const main = async () => {
  const files = getFiles(logger, { results: path.resolve(__dirname, '../../data') })
  const suites = await getSuites(logger, files)
  fs.writeFileSync(path.resolve(__dirname, 'get-suites-expected.json'), JSON.stringify(suites, null, 2))

  const dataDir = path.resolve(__dirname, '../../data')
  const data = path.join(dataDir, '/test.xml')
  const result = await parse(fs.readFileSync(data).toString())
  fs.writeFileSync(path.resolve(__dirname, 'parse-expected.json'), JSON.stringify(result, null, 2))
}
main()
