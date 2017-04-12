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
  if (message) {
    Content = <div
      className='card-content'
      dangerouslySetInnerHTML={{__html: '<pre>' + message + '</pre>'}}
    />
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
