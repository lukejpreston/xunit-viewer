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

export default ({ suitesExpanded = true, count = 0, total = 0, dispatch, active = false }) => {
  return <div className={`options card`}>
    <header className='card-header'>
      <Search label='Suites' dispatch={dispatch} />
      <button className='button card-header-icon'>
        <div className='options-inputs'>
          <Total count={count} total={total} />
        </div>
        <span className='icon'>
          <i className='fas fa-angle-down' />
        </span>
      </button>
    </header>
    {active
      ? <div className='card-content'>
        <Toggle
          onChange={() => dispatch({ type: 'toggle-all-suites' })}
          active={suitesExpanded}
          onLabel='Expanded'
          offLabel='Contracted'
          offIcon={<ChevronUpIcon />}
          onIcon={<ChevronDownIcon />} />
      </div>
      : null}
  </div>
}
