import React, {PropTypes} from 'react'

import iconMap from '../icon-map'

let knownStatuses = [
  'pass',
  'fail',
  'error',
  'skip'
]

function hex2a(hexx) {
  const hex = hexx.toString();
  let str = '';

  for (var i = 0; (i < hex.length && hex.substr(i, 2) !== '00'); i += 2) {
    str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  }

  return str;
}

function decodeBytes(message) {
  return message.replace(/%\d\d/g, (s, m) => hex2a(m))
}

let Test = ({uuid, status, name, message, raw, onToggle, collapsed, onToggleRaw, time}) => {
  let isCollapsed = Object.keys(collapsed.tests).includes(uuid) ? 'collapsed' : 'expanded'
  status = knownStatuses.includes(status) ? status : 'unknown'
  let Content = null

  if (raw) Content = <code className='test-code'>{decodeBytes(message)}</code>
  else if (message) Content = <div className='test-message' dangerouslySetInnerHTML={{__html: decodeBytes(message)}} />

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
        {time ? <i className='card-header-title-time'>({time})</i> : null}
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
  time: PropTypes.string,
  message: PropTypes.any,
  raw: PropTypes.any,
  onToggle: PropTypes.func.isRequired,
  onToggleRaw: PropTypes.func.isRequired,
  collapsed: PropTypes.object.isRequired
}

export default Test
