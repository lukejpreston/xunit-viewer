import React from 'react'
import Toggle from './toggle'

const Search = ({ label, dispatch }) => <div className='field options-search'>
  <div className='control'>
    <input
      onChange={(evt) => {
        dispatch({
          type: 'search-suites',
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

const Total = ({ count, total }) => <div className='options-total'>
  <b>{count}</b><span>/{total}</span>
</div>

const ChevronUpIcon = () => <span className='icon'>
  <i className='fas fa-chevron-up' />
</span>

const ChevronDownIcon = () => <span className='icon'>
  <i className='fas fa-chevron-down' />
</span>

export default ({ suitesExpanded = true, count = 0, total = 0, dispatch }) => {
  return <div className={`options card`}>
    <header className='card-header'>
      <div className='options-inputs'>
        <Search label='Suites' dispatch={dispatch} />
        <Total count={count} total={total} />
      </div>
    </header>
    <div className='card-content'>
      <Toggle
        onChange={() => dispatch({ type: 'toggle-all-suites' })}
        active={suitesExpanded}
        onLabel='Expanded'
        offLabel='Contracted'
        offIcon={<ChevronUpIcon />}
        onIcon={<ChevronDownIcon />} />
    </div>
  </div>
}
