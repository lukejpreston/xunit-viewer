import React from 'react'

const icons = {
  passed: 'check',
  failure: 'times',
  error: 'exclamation',
  skipped: 'ban',
  unknown: 'question'
}

const SuiteCount = ({ count, type }) => count > 0
  ? <span className='suite-count'>
        <span className='icon'>
            <i className={`fas fa-${icons[type]}`} aria-hidden='true' />
        </span>
        {count}
    </span>
  : null

export default SuiteCount
