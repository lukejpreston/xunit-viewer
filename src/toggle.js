import React, { useState } from 'react'

export default ({
  active,
  onIcon,
  offIcon,
  onLabel,
  offLabel,
  disabled = false,
  onChange = () => {}
}) => {
  const [on, setOn] = useState(active)
  return <button
    onClick={() => {
      setOn(!on)
      onChange(!on)
    }}
    disabled={disabled}
    className={`button toggle is-${on ? 'active' : 'inactive'}`}>
    <div className='toggle-rail'>
      <div className='toggle-handle' />
    </div>
    {on ? onIcon : offIcon}
    <span>{on ? onLabel : offLabel}</span>
  </button>
}
