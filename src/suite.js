import React, { useState } from 'react'
import { title } from 'change-case'

const icons = {
  passed: 'check',
  failure: 'times',
  error: 'exclamation',
  skipped: 'ban',
  unknown: 'question'
}

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

const Test = (props) => {
  const { messages, status, time, name, active = false } = props
  const [open, setOpen] = useState(active)
  return <div className={`test card is-${open ? 'active' : 'inactive'} is-${status}`}>
    <button className='card-header' onClick={() => { setOpen(!open) }}>
      <p className='card-header-title'>
        <span className='icon'>
          <i className={`fas fa-${icons[status] || icons.unknown}`} aria-hidden='true' />
        </span>
        <span>{title(name)}</span>
        {time ? <small>{time}</small> : null}
      </p>
      <span className='card-header-icon'>
        <span className='icon'>
          <i className='fas fa-angle-down' />
        </span>
      </span>
    </button>
    {messages.length > 0 ? <div className='card-content'>
      {/* {messages.map((message, index) => <p key={`test-message-${index}`}>{message}</p>)} */}
      {messages.map((message, index) => <div key={`test-message-${index}`} dangerouslySetInnerHTML={{ __html: message }} />)}

    </div> : null}
  </div>
}

const Suite = (props) => {
  const { name, active = false, properties, time, tests } = props
  const [open, setOpen] = useState(active)
  return <div className={`card suite is-${open ? 'active' : 'inactive'}`}>
    <button className='card-header' onClick={() => { setOpen(!open) }}>
      <p className='card-header-title'>
        <span>{title(name)}</span>
        {time ? <small>{time}</small> : null}
      </p>
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
          {Object.keys(tests).map(key => <Test key={key} {...tests[key]} />)}
        </div>
      </div>
    </div>
  </div>
}

export default Suite
