import queryString from 'query-string'
import { useSearchParams } from 'react-router-dom'

const useVisibility = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = queryString.parse(searchParams.toString(), { parseBooleans: true })

  const passed = ('passed' in query ? query.passed : true)
  const skipped = ('skipped' in query ? query.skipped : true)
  const error = 'error' in query ? query.error : true
  const failure = 'failure' in query ? query.failure : true
  const unknown = 'unknown' in query ? query.unknown : true

  let fastFilter = 3
  if (passed && skipped && error && failure && unknown) fastFilter = 2
  else if (passed && skipped && !error && !failure && !unknown) fastFilter = 1
  else if (!passed && !skipped && error && failure && unknown) fastFilter = 0

  return {
    query: {
      passed,
      skipped,
      error,
      failure,
      unknown
    },
    all: passed && skipped && error && failure && unknown,
    fastFilter,
    setSearchParams
  }
}

export default useVisibility
