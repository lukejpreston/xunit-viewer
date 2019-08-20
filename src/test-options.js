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

const EyeIcon = ({ status }) => <>
  <span className='icon'>
    <i className='fas fa-eye' />
  </span>
  <span className='icon'>
    <i className={`fas fa-${icons[status] || icons.unknown}`} aria-hidden='true' />
  </span>
</>

const EyeSlashIcon = ({ status }) => <>
  <span className='icon'>
    <i className='fas fa-eye-slash' />
  </span>
  <span className='icon'>
    <i className={`fas fa-${icons[status] || icons.unknown}`} aria-hidden='true' />
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

const Options = ({
  testCounts = {},
  count = 0,
  total = 0,
  dispatch
}) => {
  return <div className={`options card`}>
    <header className='card-header'>
      <Search label='Tests' dispatch={dispatch} />
      <div className='options-inputs'>
        <Total count={count} total={total} />
        <StatusTotal testCounts={testCounts} status='passed' />
        <StatusTotal testCounts={testCounts} status='failure' />
        <StatusTotal testCounts={testCounts} status='error' />
        <StatusTotal testCounts={testCounts} status='skipped' />
        <StatusTotal testCounts={testCounts} status='unknown' />
      </div>
    </header>
    <div className='card-content options-toggles'>
      <div>
        <Toggle
          active
          onLabel='Passed Visible'
          offLabel='Passed Hidden'
          onIcon={<EyeIcon status='passed' />}
          offIcon={<EyeSlashIcon status='passed' />} />
        <Toggle
          active
          onLabel='Raw'
          offLabel='Pretty'
          onIcon={<CodeIcon />}
          offIcon={<PrettyIcon />} />
      </div>
      <div>
        <Toggle
          active
          onLabel='Failure Visible'
          offLabel='Failure Hidden'
          onIcon={<EyeIcon status='failure' />}
          offIcon={<EyeSlashIcon status='failure' />} />
        <Toggle
          active
          onLabel='Expanded'
          offLabel='Contracted'
          offIcon={<ChevronUpIcon />}
          onIcon={<ChevronDownIcon />} />
      </div>
      <div>
        <Toggle
          active
          onLabel='Error Visible'
          offLabel='Error Hidden'
          onIcon={<EyeIcon status='error' />}
          offIcon={<EyeSlashIcon status='error' />} />
      </div>
      <div>
        <Toggle
          active
          onLabel='Skipped Visible'
          offLabel='Skipped Hidden'
          onIcon={<EyeIcon status='skipped' />}
          offIcon={<EyeSlashIcon status='skipped' />} />
      </div>
      <div>
        <Toggle
          active
          onLabel='Unknown Visible'
          offLabel='Unknown Hidden'
          onIcon={<EyeIcon status='unknown' />}
          offIcon={<EyeSlashIcon status='unknown' />} />
      </div>
    </div>
  </div>
}

export default Options
