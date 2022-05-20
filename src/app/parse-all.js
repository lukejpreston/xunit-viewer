import merge from 'merge'
import parse from './parse'

export default async (dispatch, files, suites) => {
  for (const { file, contents } of files) {
    try {
      const parsed = await parse(contents)
      suites = merge.recursive(true, suites, parsed)
      if (Object.keys(suites.suites).length === 0) {
        dispatch({
          type: 'parse-error',
          payload: {
            error: 'No suites or tests detected in this file. It might be in a format not supported yet. Please raise an issue with the data so it can be addressed 😃'
          }
        })
      } else {
        dispatch({
          type: 'parse-suites',
          payload: {
            suites: suites.suites
          }
        })
      }
    } catch (err) {
      console.log('Failed to parse', file, '\n', err.message)
      dispatch({
        type: 'parse-error',
        payload: {
          error: err
        }
      })
    }
  }
}
