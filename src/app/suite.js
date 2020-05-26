import React from 'react'
import Toggle from './toggle'

const icons = {
  passed: 'check',
  failure: 'times',
  error: 'exclamation',
  skipped: 'ban',
  unknown: 'question'
}

const Properties = ({ properties, active = true, dispatch, suite, test = null }) => {
  return <div className={`properties card is-${active ? 'active' : 'inactive'}`}>
    <button className='card-header' onClick={() => { dispatch({ type: 'toggle-properties', payload: { suite, test, active: !active } }) }}>
      <p className='card-header-title'>Properties</p>
      <span className='card-header-icon'>
        <span className='icon'>
          <i className='fas fa-angle-down' />
        </span>
      </span>
    </button>
    {active ? <div className='card-content'>
      <table className='table'>
        <thead>
          <tr>
            <th>Property</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(properties)
            .filter(key => key !== '_active' && key !== '_visible')
            .map(key => {
              return <tr key={key}>
                <td>{key}</td>
                <td>{properties[key].join(', ')}</td>
              </tr>
            })}
        </tbody>
      </table>
    </div> : null}
  </div>
}

const RawContent = ({ messages }) => <div className='raw-content'>
  {messages.map((message, index) => <pre key={`test-message-${index}`}>{message}</pre>)}
</div>

const PrettyContent = ({ messages }) => <div className='pretty-content'>
  {messages.map((message, index) => <div key={`test-message-${index}`} dangerouslySetInnerHTML={{ __html: message }} />)}
</div>

const PrettyIcon = () => <span className='icon'>
  <i className='fas fa-star' />
</span>

const CodeIcon = () => <span className='icon'>
  <i className='fas fa-code' />
</span>

const Test = ({ id, messages, status, time, classname, name, properties = {}, active = true, raw = true, dispatch, suite }) => {
  const hasProperties = properties._visible & Object.keys(properties).filter(key => key !== '_active' && key !== '_visible').length > 0
  const hasMessage = messages.length > 0
  return <div className={`test card is-${active ? 'active' : 'inactive'} is-${status} is-${!hasMessage && !hasProperties ? 'empty' : 'populated'}`}>
    <button className='card-header' onClick={() => { dispatch({ type: 'toggle-test', payload: { suite, id, active: !active } }) }} disabled={!hasMessage && !hasProperties}>
      <p className='card-header-title'>
        <span className='icon'>
          <i className={`fas fa-${icons[status] || icons.unknown}`} aria-hidden='true' />
        </span>
        <span>{name}</span>
        {classname ? <small>classname = {classname}</small> : null}
        {time ? <small>time = {time}</small> : null}
      </p>
      {hasMessage || hasProperties ? <span className='card-header-icon'>
        <span className='icon'>
          <i className='fas fa-angle-down' />
        </span>
      </span> : null}
    </button>
    <div className='content'>
      {active && (hasMessage || hasProperties) ? <div className='card-content'>
        {hasProperties ? <Properties properties={properties} suite={suite} test={id} dispatch={dispatch} active={properties._active} /> : null}
        {
          hasMessage
            ? <>
              <Toggle
                active={raw}
                onLabel='raw'
                onIcon={<CodeIcon />}
                offIcon={<PrettyIcon />}
                offLabel='pretty'
                onChange={() => dispatch({ type: 'toggle-test-mode', payload: { suite, id, raw: !raw } })} />
              {
                raw
                  ? <RawContent messages={messages} />
                  : <PrettyContent messages={messages} />
              }
            </>
            : null
        }
      </div> : null}
    </div>
  </div>
}

const SuiteCount = ({ count, type }) => count > 0 ? <span className='suite-count'>
  <span className='icon'>
    <i className={`fas fa-${icons[type]}`} aria-hidden='true' />
  </span>
  {count}
</span> : null

const Suite = ({ visible, id, name, active = false, properties = {}, time, tests = {}, dispatch, systemOut = [] }) => {
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

  const hasTests = Object.keys(tests).length > 0 && Object.values(tests).some(test => test.visible)
  const hasProperties = '_visible' in properties && properties._visible && Object.keys(properties).filter(key => key !== '_active' && key !== '_visible').length > 0
  const containsSomething = hasTests || hasProperties
  return <div className={`card suite is-${active ? 'active' : 'inactive'} is-${containsSomething ? 'populated' : 'empty'} is-${visible ? 'visible' : 'hidden'}`}>
    <button className='card-header' onClick={() => { if (containsSomething) dispatch({ type: 'toggle-suite', payload: { id, active: !active } }) }} disabled={!containsSomething}>
      <p className='card-header-title'>
        <span>{name}</span>
        {time ? <small>time = {time}</small> : null}
      </p>

      {containsSomething ? <span className='card-header-icon'>
        <span className='icon'>
          <i className='fas fa-angle-down' />
        </span>
      </span> : null}
      {containsSomething ? <p className='suite-count-container'>
        <SuiteCount type='failure' count={failure} />
        <SuiteCount type='error' count={error} />
        <SuiteCount type='passed' count={passed} />
        <SuiteCount type='skipped' count={skipped} />
        <SuiteCount type='unknown' count={unknown} />
      </p> : null}
    </button>
    {active && containsSomething ? <div className='card-content'>
      <div className='content'>
        {systemOut.length > 0 ? systemOut.map((value, index) => <pre key={`${id}-sysout-${index}`}>{value}</pre>) : null}
        {hasProperties ? <Properties properties={properties} suite={id} dispatch={dispatch} active={properties._active} /> : null}
        <div>
          {Object.keys(tests)
            .filter((key) => tests[key].visible && tests[key].status === 'failure')
            .map(key => <Test key={key} {...tests[key]} suite={id} dispatch={dispatch} />)}
          {Object.keys(tests)
            .filter((key) => tests[key].visible && tests[key].status === 'error')
            .map(key => <Test key={key} {...tests[key]} suite={id} dispatch={dispatch} />)}
          {Object.keys(tests)
            .filter((key) => tests[key].visible && tests[key].status === 'passed')
            .map(key => <Test key={key} {...tests[key]} suite={id} dispatch={dispatch} />)}
          {Object.keys(tests)
            .filter((key) => tests[key].visible && tests[key].status === 'skipped')
            .map(key => <Test key={key} {...tests[key]} suite={id} dispatch={dispatch} />)}
          {Object.keys(tests)
            .filter((key) => tests[key].visible && !['failure', 'error', 'passed', 'skipped'].includes(tests[key].status))
            .map(key => <Test key={key} {...tests[key]} suite={id} dispatch={dispatch} />)}
        </div>
      </div>
    </div> : null}
  </div>
}

export default Suite
