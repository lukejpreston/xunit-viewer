import React, { useState } from 'react'
import { title } from 'change-case'

const icons = {
  passed: 'check',
  failed: 'times',
  warning: 'exclamation',
  skipped: 'ban',
  unknown: 'question'
}

const Search = ({ label }) => <div className='field options-search'>
  <div className='control'>
    <input className='input' type='text' placeholder={label} />
  </div>
</div>

const Total = ({ count, total }) => <div className='options-total'>
  <b>{count}</b><span>/{total}</span>
</div>

const Count = ({ type, total }) => {
  if (total === 0) return null
  return <div className='options-count'>
    <span className='icon'>
      <i className={`fas fa-${icons[type]}`} aria-hidden='true' />
    </span>
    <span>{total}</span>
  </div>
}

const Toggle = ({ onIcon, offIcon, onLabel, offLabel, disabled }) => <button disabled={disabled} className='button toggle is-active'>
  <div className='toggle-rail'>
    <div className='toggle-handle' />
  </div>
  <span className='icon'>
    <i className={`fas fa-${onIcon}`} />
  </span>
  <span>{onLabel}</span>
</button>

const Toggles = ({ label, type, disabled }) => <div className='toggles'>
  <h6 className='title is-6'>
    {type ? <span className='icon'>
      <i className={`fas fa-${icons[type]}`} aria-hidden='true' />
    </span> : null}
    <span>{title(label || type)}</span>
  </h6>
  <Toggle onIcon='eye' offIcon='eye-slash' onLabel='Visible' offLabel='Hidden' disabled={disabled} />
  <Toggle onIcon='chevron-down' offIcon='chevron-up' onLabel='Expanded' offLabel='Contracted' disabled={disabled} />
  <Toggle onIcon='code' offIcon='align-left' onLabel='Raw' offLabel='Pretty' disabled={disabled} />
</div>

const ToggleOptions = ({ device, onClick }) => <button onClick={onClick} className={`card-header-icon is-hidden-${device}`}>
  <span className='icon'>
    <i className='fas fa-angle-down' aria-hidden='true' />
  </span>
</button>

const Options = ({ label, count, total, counts = [], toggles }) => {
  const [active, setActive] = useState(false)
  return <div className={`options card is-${active ? 'active' : 'inactive'}`}>
    <header className='card-header'>
      <ToggleOptions device='tablet' onClick={() => { setActive(!active) }} />
      <div className='options-inputs'>
        <Search label={label} />
        <Total count={count} total={total} />
        {counts.map(count => <Count {...count} />)}
      </div>
      <ToggleOptions device='mobile' onClick={() => { setActive(!active) }} />
    </header>
    {active ? <div className='card-content'>
      <div className='toggles-container'>
        {toggles.map(toggle => <Toggles {...toggle} disabled={!active} />)}
      </div>
    </div> : null}
  </div>
}

export default Options
