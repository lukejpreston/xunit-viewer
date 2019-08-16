import React from 'react'
import Toggle from './toggle'

const Search = ({ label }) => <div className='field options-search'>
  <div className='control'>
    <input className='input' type='text' placeholder={label} />
  </div>
</div>

const Total = ({ count, total }) => <div className='options-total'>
  <b>{count}</b><span>/{total}</span>
</div>

const Options = ({ count = 0, total = 0 }) => {
  return <div className={`options card`}>
    <header className='card-header'>
      <div className='options-inputs'>
        <Search label='Suites' />
        <Total count={count} total={total} />
      </div>
      <Toggle active onLabel='Exanpded' offLabel='Contracted' />
    </header>
  </div>
}

export default Options
