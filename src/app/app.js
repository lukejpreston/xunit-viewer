import React, { useEffect, useReducer } from 'react'
// import Files from './files'
import Error from './error.js'
import Hero from './hero.js'
import initialState from './initial-state.js'
import Loading from './loading.js'
import parseAll from './parse-all.js'
import PropertiesOptions from './properties-options.js'
import reducer from './reducer.js'
import SuiteOptions from './suite-options.js'
import Suite from './suite.js'
import TestOptions from './test-options.js'

const App = ({ files, title, brand }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    if (Object.keys(state.suites).length === 0) parseAll(dispatch, files)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    window.onbeforeprint = () => {
      dispatch({ type: 'print-mode', payload: { printMode: true } })
    }

    window.onafterprint = () => {
      dispatch({ type: 'print-mode', payload: { printMode: false } })
    }
  }, [])

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
    <Hero
      active={state.menuActive}
      onFilterClick={() => { dispatch({ type: 'toggle-menu' }) }}
      title={title}
      brand={brand}
      printMode={state.printMode}
      burger={state.hero.burger}
      dropdown={state.hero.dropdown}
      dispatch={dispatch}
      suites={state.currentSuites}
    />
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
      </div>
    </header>
    <main>
      <div className='container suites'>
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
              .map(suite => (
                <Suite
                  key={suite.id}
                  {...suite}
                  visible={suite._visible}
                  dispatch={dispatch}
                  printMode={state.printMode}
                />
              ))
          }
        </div>
        }
      </div>
    </main>
  </div>
}

export default App
