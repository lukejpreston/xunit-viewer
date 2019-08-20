import React, { useReducer } from 'react'
import merge from 'merge'

import Hero from './hero'
import SuiteOptions from './suite-options'
import TestOptions from './test-options'
import PropertiesOptions from './properties-options'
import Files from './files'
import Suite from './suite'
import parse from './parse'

const parseAll = async (dispatch, files, suites) => {
  for (const { contents } of files) {
    const parsed = await parse(contents)
    for (const id in parsed.suites) {
      const suite = parsed.suites[id]
      suites[id] = suites[id] || {}
      suites[id] = merge.recursive(suites[id], suite)
    }
    dispatch({
      type: 'parse-suites',
      payload: {
        suites
      }
    })
  }
}

const reducer = (state, { type, payload }) => {
  const update = {}

  if (type === 'parse-suites') {
    state = merge.recursive(true, {}, state)
    state.suites = payload.suites
    state.currentSuites = payload.suites
    return state
  }

  if (type === 'toggle-menu') update.menuActive = !state.menuActive
  if (type === 'toggle-files') update.activeFiles = !state.activeFiles

  return merge.recursive(true, state, update)
}

const initialState = {
  suites: {},
  currentSuites: {},
  menuActive: false,
  activeFiles: false
}

const App = ({ files }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  if (Object.keys(state.suites).length === 0) parseAll(dispatch, files, {})

  let currentPropertiesCount = 0
  let propertiesTotal = 0
  Object.entries(state.currentSuites).forEach(([key, suite]) => {
    currentPropertiesCount += Object.keys(suite.properties).length
  })
  Object.entries(state.currentSuites).forEach(([key, suite]) => {
    propertiesTotal += Object.keys(suite.properties).length
  })

  const testCounts = {}
  let testCount = 0
  let testTotal = 0
  Object.entries(state.currentSuites).forEach(([key, suite]) => {
    Object.entries(suite.tests).forEach(([key, test]) => {
      const status = test.status || 'unknown'
      testCounts[status] = testCounts[status] || {}
      testCounts[status].count = testCounts[status].count || 0
      testCounts[status].total = testCounts[status].total || 0

      testCounts[status].count += 1
      testCounts[status].total += 1

      testTotal += 1
      testCount += 1
    })
  })

  return <div>
    <Hero active={state.menuActive} onClick={() => { dispatch({ type: 'toggle-menu' }) }} />
    <header className={`is-${!state.menuActive ? 'hidden' : 'shown'}`}>
      <div className='container'>
        <SuiteOptions count={Object.keys(state.currentSuites).length} total={Object.keys(state.suites).length} />
        {testTotal > 0 ? <TestOptions testCounts={testCounts} count={testCount} total={testTotal} /> : null}
        {propertiesTotal > 0 ? <PropertiesOptions count={currentPropertiesCount} total={propertiesTotal} /> : null}
        <Files files={files} active={state.activeFiles} setActive={() => { dispatch({ type: 'toggle-files' }) }} />
      </div>
    </header>
    <main>
      <div className='container'>
        <div>
          {Object.values(state.currentSuites).map(suite => <Suite key={suite.id} {...suite} dispatch={dispatch} />)}
        </div>
      </div>
    </main>
  </div>
}

export default App
