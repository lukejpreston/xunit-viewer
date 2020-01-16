import React from 'react'
import Toggle from './toggle'

const Search = ({ label, dispatch }) => <div className='field options-search'>
  <div className='control'>
    <input
      onChange={(evt) => {
        dispatch({
          type: 'search-properties',
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

const EyeIcon = () => <span className='icon'>
  <i className='fas fa-eye' />
</span>

const EyeSlashIcon = () => <span className='icon'>
  <i className='fas fa-eye-slash' />
</span>

const ChevronUpIcon = () => <span className='icon'>
  <i className='fas fa-chevron-up' />
</span>

const ChevronDownIcon = () => <span className='icon'>
  <i className='fas fa-chevron-down' />
</span>

export default ({ count = 0, total = 0, active = false, dispatch, propertiesExpanded = true, propertiesVisible = true }) => {
  return <div className={`options card ${active ? 'is-active' : 'is-inactive'}`}>
    <header className='card-header'>
      <Search label='Properties' dispatch={dispatch} />
      <button
        onClick={() => dispatch({ type: 'toggle-properties-options' })}
        className='button card-header-icon'>
        <div className='options-inputs'>
          <Total count={count} total={total} />
        </div>
        <span className='icon'>
          <i className='fas fa-angle-down' />
        </span>
      </button>
    </header>
    <div className='card-content'>
      {active
        ? <div>
          <Toggle
            className='properties-options-toggle'
            active={propertiesVisible}
            onChange={() => {
              dispatch({
                type: 'toggle-properties-visbility',
                payload: {
                  active: !propertiesVisible
                }
              })
            }}
            onLabel='Visible'
            offLabel='Hidden'
            onIcon={<EyeIcon />}
            offIcon={<EyeSlashIcon />} />
          <Toggle
            onChange={() => {
              dispatch({
                type: 'toggle-all-properties',
                payload: {
                  active: !propertiesExpanded
                }
              })
            }}
            className='properties-options-toggle'
            active={propertiesExpanded}
            onLabel='Expanded'
            offLabel='Contracted'
            offIcon={<ChevronUpIcon />}
            onIcon={<ChevronDownIcon />} />
        </div>
        : null}
    </div>

  </div>
}
