import path from 'path'
import getFiles from './get-files'
import getSuites from './get-suites'
import expected from './get-suites-expected.json'

const logger = {
  warning: input => input,
  file: input => input,
  error: input => input
}

test('get suites', async () => {
  const files = await getFiles(logger, { results: path.resolve(__dirname, '../../data') })
  const suites = await getSuites(logger, files)
  expect(suites).toEqual(expected)
})
