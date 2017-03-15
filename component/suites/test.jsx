import React, {PropTypes} from 'react'

import iconMap from '../icon-map'

let knownStatuses = [
  'pass',
  'fail',
  'error',
  'skip'
]

let Test = ({uuid, status, name, message, onToggle, collapsed}) => {
  let isCollapsed = Object.keys(collapsed.tests).includes(uuid) ? 'collapsed' : 'expanded'
  status = knownStatuses.includes(status) ? status : 'unknown'
  let Content = null
  let Icon = null
  if (message) {
    Content = <div className='card-content'>{message}</div>
    Icon = <a className='card-header-icon'>
      <span className='icon'>
        <i className='fa fa-angle-down' />
      </span>
    </a>
  }

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
      {Icon}
    </header>
    {Content}
  </div>
}

Test.propTypes = {
  uuid: PropTypes.string.isRequired,
  status: PropTypes.string,
  name: PropTypes.string,
  message: PropTypes.any,
  onToggle: PropTypes.func.isRequired,
  collapsed: PropTypes.object.isRequired
}

export default Test
