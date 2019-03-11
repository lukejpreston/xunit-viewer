import React from 'react'

const Search = ({ label }) => <div className='field options-search'>
  <div className='control'>
    <input className='input' type='text' placeholder={label} />
  </div>
</div>

const Total = ({ count, total }) => <div className='options-total'>
  <b>{count}</b><span>/{total}</span>
</div>

const icons = {
  passed: 'check',
  failed: 'times',
  warning: 'exclamation',
  skipped: 'ban',
  unknown: 'question'
}

const Count = ({ type, total }) => {
  if (total === 0) return null
  return <div className='options-count'>
    <span className='icon'>
      <i className={`fas fa-${icons[type]}`} aria-hidden='true' />
    </span>
    <span>{total}</span>
  </div>
}

const Toggle = () => <div>
    TOGGLE
</div>

const Options = ({ label, count, total, passed = 0, failed = 0, warning = 0, skipped = 0, unknown = 0 }) => <div className='options card is-active'>
  <header className='card-header'>
    <div className='options-inputs'>
      <Search label={label} />
      <Total count={count} total={total} />
      <Count type='passed' total={passed} />
      <Count type='failed' total={failed} />
      <Count type='warning' total={warning} />
      <Count type='skipped' total={skipped} />
      <Count type='unknown' total={unknown} />
    </div>
    <button className='card-header-icon' aria-label='more options'>
      <span className='icon'>
        <i className='fas fa-angle-down' aria-hidden='true' />
      </span>
    </button>
  </header>
  <div className='card-content'>
    <div className='columns'>
      <div className='column is-1'>
        <h6 className='title is-6'>All</h6>
      </div>
      <div className='column is-1'>
        <h6 className='title is-6'>All</h6>
      </div>
      <div className='column is-1'>
        <h6 className='title is-6'>All</h6>
      </div>
      <div className='column is-1'>
        <h6 className='title is-6'>All</h6>
      </div>
      <div className='column is-1'>
        <h6 className='title is-6'>All</h6>
      </div>
      <div className='column is-1'>
        <h6 className='title is-6'>All</h6>
      </div>
    </div>
  </div>
</div>

export default Options
