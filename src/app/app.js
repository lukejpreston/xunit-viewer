import React, { useReducer, useEffect } from 'react'
import Files from './files'
import Hero from './hero'
import initialState from './initial-state.json'
import parseAll from './parse-all'
import PropertiesOptions from './properties-options'
import reducer from './reducer'
import Suite from './suite'
import SuiteOptions from './suite-options'
import TestOptions from './test-options'
import Error from './error'
import Loading from './loading'

const App = ({ files, title, brand }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    if (Object.keys(state.suites).length === 0) parseAll(dispatch, files, {})
  }, [files])

  let currentPropertiesCount = 0
  let propertiesTotal = 0
  Object.entries(state.currentSuites).forEach(([key, suite]) => {
    currentPropertiesCount += Object.keys(suite.properties).filter(key => key !== '_active' && key !== '_visible').length
    Object.values(suite.tests).forEach(test => {
      if (test.properties) currentPropertiesCount += Object.keys(test.properties).filter(key => key !== '_active' && key !== '_visible').length
    })
  })
  Object.entries(state.currentSuites).forEach(([key, suite]) => {
    propertiesTotal += Object.keys(suite.properties).filter(key => key !== '_active' && key !== '_visible').length
    Object.values(suite.tests).forEach(test => {
      if (test.properties) propertiesTotal += Object.keys(test.properties).filter(key => key !== '_active' && key !== '_visible').length
    })
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

  const onUpdate = ({ files }) => {
    parseAll(dispatch, files, {})
  }

  window.sockets = window.sockets || null
  useEffect(() => {
    if (window.sockets === null && 'io' in window) {
      window.sockets = window.io()
      window.sockets.on('update', onUpdate)
    }
  })

  return <div>
    <Hero active={state.menuActive} onClick={() => { dispatch({ type: 'toggle-menu' }) }} title={title} brand={brand} />
    <header className={`is-${!state.menuActive ? 'hidden' : 'shown'}`}>
      <div className='container'>
        <SuiteOptions
          active={state.suiteOptionsActive}
          suitesExpanded={state.suitesExpanded}
          suitesEmpty={state.suitesEmpty}
          dispatch={dispatch}
          count={Object.keys(state.currentSuites).length}
          total={Object.keys(state.suites).length}
        />
        <TestOptions
          active={state.testOptionsActive}
          testToggles={state.testToggles}
          testCounts={testCounts}
          count={testCount}
          total={testTotal}
          dispatch={dispatch}
        />
        <PropertiesOptions
          propertiesExpanded={state.propertiesExpanded}
          propertiesVisible={state.propertiesVisible}
          active={state.propertiesOptionsActive}
          count={currentPropertiesCount}
          total={propertiesTotal}
          dispatch={dispatch}
        />
        {/* TODO: figure out what this does in development */}
        {process.env.NODE_ENV === 'development'
          ? <Files files={files} active={state.activeFiles} setActive={() => { dispatch({ type: 'toggle-files' }) }} />
          : null}
      </div>
    </header>
    <main>
      <div className='container'>
        {state.errors && <Error errors={state.errors} />}
        {state.errors === null && Object.values(state.currentSuites).length === 0 && <Loading />}
        {Object.values(state.currentSuites).length > 0 && <div>
          {
            Object.values(state.currentSuites)
              .sort((left, right) => {
                if (left.name < right.name) return -1
                if (left.name > right.name) return 1
                return 0
              })
              .map(suite => <Suite key={suite.id} {...suite} visible={suite._visible} dispatch={dispatch} />)
          }
        </div>
        }
      </div>
    </main>
  </div>
}

export default App
