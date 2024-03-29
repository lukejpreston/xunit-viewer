import React from 'react'
import X from 'react-render-if-visible'
import Toggle from './toggle.js'
import SuiteCount from './suite-count.js'
import Y from 'react-linkify'
import linkify from 'linkify-html'
import useVisibility from './visible.js'
const Linkify = Y.default

const RenderIfVisible = X.default
const RenderAlways = (props) => <div {...props} />

const icons = {
  passed: 'check',
  failure: 'times',
  error: 'exclamation',
  skipped: 'ban',
  unknown: 'question'
}

const statusRank = [
  'failure',
  'error',
  'passed',
  'skipped',
  'unknown'
]

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
    {active
      ? <div className='card-content'>
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
      </div>
      : null}
  </div>
}

const RawContent = ({ messages }) => <div className='raw-content'>
  {messages.map((message, index) => <Linkify key={`test-message-${index}`}><pre>{message}</pre></Linkify>)}
</div>

const PrettyContent = ({ messages }) => <div className='pretty-content'>
  {messages.map((message, index) => <Linkify key={`test-message-${index}`}><div dangerouslySetInnerHTML={{ __html: linkify(message) }} /></Linkify>)}
</div>

const PrettyIcon = () => <span className='icon'>
  <i className='fas fa-star' />
</span>

const CodeIcon = () => <span className='icon'>
  <i className='fas fa-code' />
</span>

const Test = ({
  printMode,
  id,
  messages,
  status,
  time,
  classname,
  name,
  properties = {},
  active = true,
  raw = true,
  dispatch,
  suite
}) => {
  const hasProperties = properties._visible & Object.keys(properties).filter(key => key !== '_active' && key !== '_visible').length > 0
  const hasMessage = messages.length > 0
  const Wrapper = printMode ? RenderAlways : RenderIfVisible

  return (
    <Wrapper>
      <div className={`test card is-${active ? 'active' : 'inactive'} is-${status} is-${!hasMessage && !hasProperties ? 'empty' : 'populated'}`}>
        <button className='card-header' onClick={() => { dispatch({ type: 'toggle-test', payload: { suite, id, active: !active } }) }} disabled={!hasMessage && !hasProperties}>
          <p className='card-header-title'>
            <span className='icon'>
              <i className={`fas fa-${icons[status] || icons.unknown}`} aria-hidden='true' />
            </span>
            <span>{name}</span>
            {classname ? <small>classname = {classname}</small> : null}
            {time ? <small>time = {time}</small> : null}
          </p>
          {hasMessage || hasProperties
            ? <span className='card-header-icon'>
              <span className='icon'>
                <i className='fas fa-angle-down' />
              </span>
            </span>
            : null}
        </button>
        <div className='content'>
          {active && (hasMessage || hasProperties)
            ? <div className='card-content'>
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
            </div>
            : null}
        </div>
      </div>
    </Wrapper>
  )
}

const Suite = ({
  visible,
  id,
  name,
  active = false,
  properties = {},
  time,
  tests = {},
  dispatch,
  systemOut = [],
  printMode = false
}) => {
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

  const Wrapper = printMode ? RenderAlways : RenderIfVisible

  const { query } = useVisibility()

  const hasTests = Object.keys(tests).length > 0 && Object.values(tests).some(test => query[test.status])
  const hasProperties = '_visible' in properties && properties._visible && Object.keys(properties).filter(key => key !== '_active' && key !== '_visible').length > 0
  const containsSomething = hasTests || hasProperties
  return (
    <Wrapper>
      <div className={`card suite is-${active ? 'active' : 'inactive'} is-${containsSomething ? 'populated' : 'empty'} is-${visible ? 'visible' : 'hidden'}`}>
        <button className='card-header' onClick={() => { if (containsSomething) dispatch({ type: 'toggle-suite', payload: { id, active: !active } }) }} disabled={!containsSomething}>
          <p className='card-header-title'>
            <span>{name}</span>
            {time ? <small>time = {time}</small> : null}
          </p>

          {containsSomething
            ? <span className='card-header-icon'>
              <span className='icon'>
                <i className='fas fa-angle-down' />
              </span>
            </span>
            : null}
          {containsSomething
            ? <p className='suite-count-container'>
              <SuiteCount type='failure' count={failure} />
              <SuiteCount type='error' count={error} />
              <SuiteCount type='passed' count={passed} />
              <SuiteCount type='skipped' count={skipped} />
              <SuiteCount type='unknown' count={unknown} />
            </p>
            : null}
        </button>
        {active && containsSomething
          ? <div className='card-content'>
            <div className='content'>
              {systemOut.length > 0 ? systemOut.map((value, index) => <pre key={`${id}-sysout-${index}`}>{value}</pre>) : null}
              {hasProperties ? <Properties properties={properties} suite={id} dispatch={dispatch} active={properties._active} /> : null}
              <div>
                {
                  Object.entries(tests)
                    .filter(([key, test]) => query[test.status])
                    .sort((left, right) => {
                      let leftStatus = statusRank.indexOf(left[1].status)
                      let rightStatus = statusRank.indexOf(right[1].status)

                      leftStatus = leftStatus === -1 ? statusRank.length : leftStatus
                      rightStatus = rightStatus === -1 ? statusRank.length : rightStatus

                      if (leftStatus < rightStatus) {
                        return -2
                      }
                      if (leftStatus > rightStatus) return 2

                      const leftName = left[1].name
                      const rightName = right[1].name

                      if (leftName < rightName) return -1
                      if (leftName > rightName) return 1

                      return 0
                    })
                    .map(([key, test]) => <Test key={key} {...test} suite={id} dispatch={dispatch} printMode={printMode} />)
                }
              </div>
            </div>
          </div>
          : null}
      </div>
    </Wrapper>
  )
}

export default Suite
