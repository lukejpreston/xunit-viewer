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

export default ({ count = 0, total = 0, active = false, dispatch }) => {
  return <div className={`options card ${active ? 'is-active' : 'is-inactive'}`}>
    <header className='card-header'>
      <Search label='Propeties' />
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
        ? <>
          <div>
            <Toggle
              className='properties-options-toggle'
              active
              onLabel='Expanded'
              offLabel='Contracted'
              offIcon={<ChevronUpIcon />}
              onIcon={<ChevronDownIcon />} />
            <Toggle
              className='properties-options-toggle'
              active
              onLabel='Visible'
              offLabel='Hidden'
              onIcon={<EyeIcon />}
              offIcon={<EyeSlashIcon />} />
          </div>
        </>
        : null}
    </div>

  </div>
}
