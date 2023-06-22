import merge from 'merge'
import parse from './parse.js'

export default async (dispatch, files, suites) => {
  for (const { file, contents } of files) {
    try {
      const parsed = await parse(contents, { passed: false, skipped: false, unknown: true, failure: true, error: true })
      if (Object.keys(parsed.suites).length === 0) {
        dispatch({
          type: 'parse-error',
          payload: {
            file,
            error: 'No suites or tests detected in this file. It could be an unsupported format.'
          }
        })
      }
      suites = merge.recursive(true, suites, parsed)
    } catch (err) {
      dispatch({
        type: 'parse-error',
        payload: {
          file,
          error: err.message
        }
      })
    }
  }
  if (Object.keys(suites.suites).length > 0) {
    dispatch({
      type: 'parse-suites',
      payload: {
        suites: suites.suites
      }
    })
  } else {
    dispatch({
      type: 'parse-error',
      payload: {
        file: 'See errors',
        error: 'No suites or tests detected.'
      }
    })
  }
}
