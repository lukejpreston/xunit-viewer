import React, { useState } from 'react'
import { title } from 'change-case'

const Properties = ({ properties, active = false }) => {
  const [open, setOpen] = useState(active)
  return <div className={`properties card is-${open ? 'active' : 'inactive'}`}>
    <button className='card-header' onClick={() => { setOpen(!open) }}>
      <p className='card-header-title'>Properties</p>
      <span className='card-header-icon'>
        <span className='icon'>
          <i className='fas fa-angle-down' />
        </span>
      </span>
    </button>
    <div className='card-content'>
      <table className='table'>
        <thead>
          <tr>
            <th>Property</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(properties).map(key => {
            return <tr key={key}>
              <td>{key}</td>
              <td>{properties[key]}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  </div>
}

const Suite = ({ name, active = false, properties }) => {
  const [open, setOpen] = useState(active)
  return <div className={`card suite is-${open ? 'active' : 'inactive'}`}>
    <button className='card-header' onClick={() => { setOpen(!open) }}>
      <p className='card-header-title'>{title(name)}</p>
      <span className='card-header-icon'>
        <span className='icon'>
          <i className='fas fa-angle-down' />
        </span>
      </span>
    </button>
    <div className='card-content'>
      <div className='content'>
        {properties ? <Properties properties={properties} /> : null}
        <div>
      Tests
        </div>
      </div>
    </div>
  </div>
}

export default Suite
