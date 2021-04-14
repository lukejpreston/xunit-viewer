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

const HideIcon = () => <span className='icon'>
  <i className='far fa-eye-slash' />
</span>

const ShowIcon = () => <span className='icon'>
  <i className='far fa-eye' />
</span>

const SuiteOptions = ({ suitesExpanded = true, suitesEmpty = true, count = 0, total = 0, dispatch, active = false }) => {
  return <div className={`options card ${active ? 'is-active' : 'is-inactive'}`}>
    <header className='card-header'>
      <Search label='Suites' dispatch={dispatch} />
      <button
        onClick={() => dispatch({ type: 'toggle-suite-options' })}
        className='button card-header-icon'>
        <div className='options-inputs'>
          <Total count={count} total={total} />
        </div>
        <span className='icon'>
          <i className='fas fa-angle-down' />
        </span>
      </button>
    </header>
    <div className='card-content options-toggles'>
      {active
        ? <>
          <Toggle
            onChange={() => dispatch({ type: 'toggle-all-suites' })}
            active={suitesExpanded}
            onLabel='Expanded'
            offLabel='Contracted'
            offIcon={<ChevronUpIcon />}
            onIcon={<ChevronDownIcon />} />
          <Toggle
            onChange={() => dispatch({ type: 'toggle-empty-suites' })}
            active={suitesEmpty}
            onLabel='Empty hidden'
            offLabel='Empty shown'
            onIcon={<HideIcon />}
            offIcon={<ShowIcon />} />
        </>
        : null}
    </div>

  </div>
}

export default SuiteOptions
