import React, { useState } from 'react'

import Hero from './hero'
import Options from './options'
import Files from './files'

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

const App = () => {
  let [options, setOptions] = useState(initialOptions)
  const [menuActive, setMenu] = useState(true)

  return <div>
    <Hero active={menuActive} onClick={() => { setMenu(!menuActive) }} />
    <header className={`is-${!menuActive ? 'hidden' : 'shown'}`}>
      <div className='container'>
        {options.map(props => <Options {...props} />)}
        <Files />
      </div>
    </header>
  </div>
}

export default App
