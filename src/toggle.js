import React from 'react'

export default ({
  active,
  onIcon,
  offIcon,
  onLabel,
  offLabel,
  disabled = false,
  onChange = () => {}
}) => {
  return <button
    onClick={() => {
      onChange(!active)
    }}
    disabled={disabled}
    className={`button toggle is-${active ? 'active' : 'inactive'}`}>
    <div className='toggle-rail'>
      <div className='toggle-handle' />
    </div>
    {active ? onIcon : offIcon}
    <span>{active ? onLabel : offLabel}</span>
  </button>
}
