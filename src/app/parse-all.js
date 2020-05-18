import merge from 'merge'
import parse from './parse'

export default async (dispatch, files, suites) => {
  for (const { file, contents } of files) {
    try {
      const parsed = await parse(contents)
      suites = merge.recursive(true, suites, parsed)
    } catch (err) {
      console.log('Failed to parse', file, '\n', err.message)
    }
  }
  dispatch({
    type: 'parse-suites',
    payload: {
      suites: suites.suites
    }
  })
}
