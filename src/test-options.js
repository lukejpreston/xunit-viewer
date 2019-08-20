import React from 'react'
import Toggle from './toggle'

const icons = {
  passed: 'check',
  failure: 'times',
  error: 'exclamation',
  skipped: 'ban',
  unknown: 'question'
}

const Search = ({ label, dispatch, suite, id }) => <div className='field options-search'>
  <div className='control'>
    <input
      onChange={(evt) => {
        dispatch({
          type: 'search-tests',
          payload: {
            value: evt.target.value
          }
        })
      }}
      className='input'
      type='text'
      placeholder={label} />
  </div>
</div>

const Total = ({ count, total, icon }) => <div className='options-total'>
  {icon
    ? <span className='icon'>
      <i className={`fas fa-${icons[icon] || icons.unknown}`} aria-hidden='true' />
    </span>
    : null}
  <b>{count}</b><span>/{total}</span>
</div>

const fromTestCounts = (testCounts, status, value) => {
  const statusCounts = testCounts[status] || {}
  return statusCounts[value] || 0
}

const EyeIcon = () => <>
  <span className='icon'>
    <i className='fas fa-eye' />
  </span>
</>

const EyeSlashIcon = () => <>
  <span className='icon'>
    <i className='fas fa-eye-slash' />
  </span>
</>

const PrettyIcon = () => <span className='icon'>
  <i className='fas fa-star' />
</span>

const CodeIcon = () => <span className='icon'>
  <i className='fas fa-code' />
</span>

const ChevronUpIcon = () => <span className='icon'>
  <i className='fas fa-chevron-up' />
</span>

const ChevronDownIcon = () => <span className='icon'>
  <i className='fas fa-chevron-down' />
</span>

const StatusTotal = ({ testCounts, status }) => {
  return fromTestCounts(testCounts, status, 'total') > 0 ? <Total count={fromTestCounts(testCounts, status, 'count')} total={fromTestCounts(testCounts, status, 'total')} icon={status} /> : null
}

const ToggleRow = ({ status, label }) => <div className='test-options-toggle-row'>
  <div className='test-options-toggle-row-label'>
    {status !== 'all'
      ? <span className='icon'>
        <i className={`fas fa-${icons[status] || icons.unknown}`} aria-hidden='true' />
      </span>
      : <span className='icon'>
        <i className='far fa-circle' aria-hidden='true' />
      </span>}
    <span>{label}</span>
  </div>
  <Toggle
    active
    onLabel='Visible'
    offLabel='Hidden'
    onIcon={<EyeIcon />}
    offIcon={<EyeSlashIcon />} />
  <Toggle
    active
    onLabel='Exanded'
    offLabel='Contracted'
    onIcon={<ChevronDownIcon />}
    offIcon={<ChevronUpIcon />} />
  <Toggle
    active
    onLabel='Raw'
    offLabel='Pretty'
    onIcon={<CodeIcon />}
    offIcon={<PrettyIcon />} />

</div>

const Options = ({
  testCounts = {},
  count = 0,
  total = 0,
  dispatch,
  active = false
}) => {
  return <div className={`options card`}>
    <header className='card-header'>
      <Search label='Tests' dispatch={dispatch} />
      <button className='button card-header-icon'>
        <div className='options-inputs'>
          <Total count={count} total={total} />
          <StatusTotal testCounts={testCounts} status='passed' />
          <StatusTotal testCounts={testCounts} status='failure' />
          <StatusTotal testCounts={testCounts} status='error' />
          <StatusTotal testCounts={testCounts} status='skipped' />
          <StatusTotal testCounts={testCounts} status='unknown' />
        </div>
        <span className='icon'>
          <i className='fas fa-angle-down' />
        </span>
      </button>
    </header>
    {active
      ? <div className='card-content options-toggles'>
        <ToggleRow status='all' label='All' />
        <ToggleRow status='passed' label='Passed' />
        <ToggleRow status='failure' label='Failure' />
        <ToggleRow status='error' label='Error' />
        <ToggleRow status='skipped' label='Skipped' />
        <ToggleRow status='unknown' label='Uknown' />
      </div>
      : null}
  </div>
}

export default Options
