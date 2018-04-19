import React, {PropTypes} from 'react'

import iconMap from '../icon-map'

let knownStatuses = [
  'pass',
  'fail',
  'error',
  'skip'
]

let Test = ({uuid, status, name, message, raw, onToggle, collapsed, onToggleRaw}) => {
  let isCollapsed = Object.keys(collapsed.tests).includes(uuid) ? 'collapsed' : 'expanded'
  status = knownStatuses.includes(status) ? status : 'unknown'
  let Content = null

  if (raw) Content = <code className='test-code'>{decodeURIComponent(message)}</code>
  else if (message) Content = <div className='test-message' dangerouslySetInnerHTML={{__html: decodeURIComponent(message)}} />

  return <div className={`card test is-${isCollapsed}`}>
    <header
      className={`card-header is-${status}`}
      onClick={() => {
        onToggle({
          type: 'tests',
          uuid
        })
      }}>
      <p className='card-header-title'>
        {iconMap[status]}
        {name}
      </p>
    </header>
    {Content ? <div className='card-content'>
      <div className='test-toggle'>
        <input type='checkbox' id={`test-${uuid}`} onChange={() => { onToggleRaw({type: 'tests', uuid}) }} checked={raw !== null} />
        <label htmlFor={`test-${uuid}`}>Toggle Raw</label>
      </div>
      {Content}
    </div> : null}
  </div>
}

Test.propTypes = {
  uuid: PropTypes.string.isRequired,
  status: PropTypes.string,
  name: PropTypes.string,
  message: PropTypes.any,
  raw: PropTypes.any,
  onToggle: PropTypes.func.isRequired,
  collapsed: PropTypes.object.isRequired
}

export default Test
