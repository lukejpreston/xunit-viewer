import React, { useState } from 'react'
import { title } from 'change-case'

const icons = {
  passed: 'check',
  failure: 'times',
  error: 'exclamation',
  skipped: 'ban',
  unknown: 'question'
}

const Properties = ({ properties, active = false }) => {
  const [open, setOpen] = useState(active)
  return <div className={`properties card is-${open ? 'active' : 'inactive'}`}>
    <button className='card-header' onClick={() => { setOpen(!open) }}>
      <p className='card-header-title'>Properties</p>
      <span className='card-header-icon'>
        <span className='icon'>
          <i className='fas fa-angle-down' />
        </span>
      </span>
    </button>
    {!open ? <div className='card-content'>
      <table className='table'>
        <thead>
          <tr>
            <th>Property</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(properties).map(key => {
            return <tr key={key}>
              <td>{key}</td>
              <td>{properties[key]}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div> : null }
  </div>
}

const Test = ({ messages, status, time, name, active = false }) => {
  const [open, setOpen] = useState(active)
  return <div className={`test card is-${open ? 'active' : 'inactive'} is-${status} is-${messages.length === 0 ? 'empty' : 'populated'}`}>
    <button className='card-header' onClick={() => { setOpen(!open) }} disabled={messages.length === 0}>
      <p className='card-header-title'>
        <span className='icon'>
          <i className={`fas fa-${icons[status] || icons.unknown}`} aria-hidden='true' />
        </span>
        <span>{title(name)}</span>
        {time ? <small>time = {time}</small> : null}
      </p>
      {messages.length > 0 ? <span className='card-header-icon'>
        <span className='icon'>
          <i className='fas fa-angle-down' />
        </span>
      </span> : null}
    </button>
    {!open && messages.length > 0 ? <div className='card-content'>
      {/* RAW {messages.map((message, index) => <p key={`test-message-${index}`}>{message}</p>)} */}
      {messages.map((message, index) => <div key={`test-message-${index}`} dangerouslySetInnerHTML={{ __html: message }} />)}
    </div> : null}
  </div>
}

const SuiteCount = ({ count, type }) => count > 0 ? <span className='suite-count'>
  <span className='icon'>
    <i className={`fas fa-${icons[type]}`} aria-hidden='true' />
  </span>
  {count}
</span> : null

const Suite = ({ name, active = false, properties = {}, time, tests = {} }) => {
  let passed = 0
  let failure = 0
  let skipped = 0
  let error = 0
  let unknown = 0
  Object.keys(tests).forEach(key => {
    const status = tests[key].status
    if (status === 'passed') passed += 1
    else if (status === 'failure') failure += 1
    else if (status === 'skipped') skipped += 1
    else if (status === 'error') error += 1
    else unknown += 1
  })

  const hasTests = Object.keys(tests).length > 0
  const hasProperties = Object.keys(properties).length > 0
  const containsSomething = hasTests || hasProperties
  const [open, setOpen] = useState(active)
  return <div className={`card suite is-${open ? 'active' : 'inactive'} is-${containsSomething ? 'populated' : 'empty'}`}>
    <button className='card-header' onClick={() => { if (containsSomething) setOpen(!open) }} disabled={!containsSomething}>
      <p className='card-header-title'>
        <span>{title(name)}</span>
        {time ? <small>time = {time}</small> : null}

      </p>

      {containsSomething ? <span className='card-header-icon'>
        <span className='icon'>
          <i className='fas fa-angle-down' />
        </span>
      </span> : null}
      {containsSomething ? <p className='suite-count-container'>
        <SuiteCount type='passed' count={passed} />
        <SuiteCount type='failure' count={failure} />
        <SuiteCount type='error' count={error} />
        <SuiteCount type='skipped' count={skipped} />
        <SuiteCount type='unknown' count={unknown} />
      </p> : null}
    </button>
    {!open && containsSomething ? <div className='card-content'>
      <div className='content'>
        {hasProperties ? <Properties properties={properties} /> : null}
        <div>
          {Object.keys(tests)
            // .sort((left, right) => {
            //   const leftStatus = tests[left].status || 'unknown'
            //   const rightStatus = tests[right].status || 'unknown'
            //   if (leftStatus === 'failure' || rightStatus === 'failure') return -5
            //   if (leftStatus === 'error' || rightStatus === 'error') return -4
            //   if (leftStatus === 'unknown' || rightStatus === 'unknown') return -3
            //   if (leftStatus === 'passed' || rightStatus === 'passed') return -2
            //   if (leftStatus === 'skipped' || rightStatus === 'skipped') return -1
            //   return 0
            // })
            .map(key => <Test key={key} {...tests[key]} />)}
        </div>
      </div>
    </div> : null}
  </div>
}

export default Suite
