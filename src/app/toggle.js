import React from 'react'

export default ({
  active,
  onIcon,
  offIcon,
  onLabel,
  offLabel,
  disabled = false,
  onChange = () => {},
  className = ''
}) => {
  return <button
    onClick={() => {
      onChange(!active)
    }}
    disabled={disabled}
    className={`button toggle is-${active ? 'active' : 'inactive'} ${className}`}>
    <div className='toggle-rail'>
      <div className='toggle-handle' />
    </div>
    {active ? onIcon : offIcon}
    <span>{active ? onLabel : offLabel}</span>
  </button>
}
