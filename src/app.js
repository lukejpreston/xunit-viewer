import React, { useState } from 'react'
import merge from 'merge'

import Hero from './hero'
import Options from './options'
import Files from './files'
import Suite from './suite'
import parse from './parse'

const initialOptions = [{
  key: 'suites',
  label: 'Suites',
  term: '',
  active: false,
  count: 0,
  total: 0,
  counts: [],
  toggles: [{
    key: 'all',
    label: 'all',
    visible: true,
    expanded: true,
    raw: true
  }]
}, {
  key: 'tests',
  label: 'Tests',
  term: '',
  active: false,
  count: 0,
  total: 0,
  counts: [],
  toggles: [{
    key: 'all',
    label: 'all',
    visible: true,
    expanded: true,
    raw: true
  }]
}, {
  key: 'properties',
  label: 'Properties',
  term: '',
  active: false,
  count: 0,
  total: 0,
  counts: [],
  toggles: [{
    key: 'all',
    label: 'all',
    visible: true,
    expanded: true,
    raw: true
  }]
}]

const parseAll = (files, suites) => new Promise(async resolve => {
  for (const { contents } of files) {
    const parsed = await parse(contents)
    for (const id in parsed.suites) {
      const suite = parsed.suites[id]
      suites[id] = suites[id] || {}
      suites[id] = merge.recursive(suites[id], suite)
    }
    resolve(suites)
  }
})

const App = ({ files }) => {
  const [suites, setSuites] = useState({})
  if (Object.keys(suites).length === 0) parseAll(files, {}).then(setSuites)

  let [options] = useState(initialOptions)
  const [menuActive, setMenu] = useState(false)

  return <div>
    <Hero active={menuActive} onClick={() => { setMenu(!menuActive) }} />
    <header className={`is-${!menuActive ? 'hidden' : 'shown'}`}>
      <div className='container'>
        {options.map(props => <Options {...props} />)}
        <Files files={files} />
      </div>
    </header>
    <main>
      <div className='container'>
        <div>
          {Object.values(suites).map(suite => {
            return <Suite key={suite.id} {...suite} />
          })}
        </div>
      </div>
    </main>
  </div>
}

export default App
