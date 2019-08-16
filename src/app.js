import React, { useState } from 'react'
import merge from 'merge'

import Hero from './hero'
import SuiteOptions from './suite-options'
import TestOptions from './test-options'
import PropertiesOptions from './properties-options'
import Files from './files'
import Suite from './suite'
import parse from './parse'

const parseAll = async (setSuites, setCurrentSuites, files, suites) => {
  for (const { contents } of files) {
    const parsed = await parse(contents)
    for (const id in parsed.suites) {
      const suite = parsed.suites[id]
      suites[id] = suites[id] || {}
      suites[id] = merge.recursive(suites[id], suite)
    }
    setSuites(suites)
    setCurrentSuites(suites)
  }
}

const App = ({ files }) => {
  const [menuActive, setMenu] = useState(false)
  const [suites, setSuites] = useState({})
  const [activeFiles, setActiveFiles] = useState(false)
  const [currentSuites, setCurrentSuites] = useState({})

  if (Object.keys(suites).length === 0) {
    parseAll(setSuites, setCurrentSuites, files, {})
  }

  let propertiesTotal = 0
  Object.entries(suites).forEach(([key, suite]) => {
    propertiesTotal += Object.keys(suite.properties).length
  })

  let currentPropertiesCount = 0
  Object.entries(currentSuites).forEach(([key, suite]) => {
    currentPropertiesCount += Object.keys(suite.properties).length
  })

  const testCounts = {}
  let testCount = 0
  let testTotal = 0
  Object.entries(currentSuites).forEach(([key, suite]) => {
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
    <Hero active={menuActive} onClick={() => { setMenu(!menuActive) }} />
    <header className={`is-${!menuActive ? 'hidden' : 'shown'}`}>
      <div className='container'>
        <SuiteOptions count={Object.keys(currentSuites).length} total={Object.keys(suites).length} />
        {testTotal > 0 ? <TestOptions testCounts={testCounts} count={testCount} total={testTotal} /> : null}
        {propertiesTotal > 0 ? <PropertiesOptions count={currentPropertiesCount} total={propertiesTotal} /> : null}
        <Files files={files} active={activeFiles} setActive={setActiveFiles} />
      </div>
    </header>
    <main>
      <div className='container'>
        <div>
          {Object.values(currentSuites).map(suite => {
            return <Suite key={suite.id} {...suite} />
          })}
        </div>
      </div>
    </main>
  </div>
}

export default App
