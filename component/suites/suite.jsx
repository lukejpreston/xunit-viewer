import React, { PropTypes } from 'react'
import Properties from './properties'
import Test from './test'
import iconMap from '../icon-map'

let Suite = ({
  uuid,
  name = '',
  status = 'unknown',
  properties = {},
  tests = [],
  onToggle,
  onToggleRaw,
  collapsed,
  hidden,
  suites = [],
  time
}) => {
  suites = suites.map(suite => {
    return <Suite
      collapsed={collapsed}
      hidden={hidden}
      uuid={suite._uuid}
      onToggle={onToggle}
      key={`suite-${suite._uuid}`}
      name={suite.name}
      status={suite.status}
      properties={suite.properties}
      tests={suite.tests}
      suites={suite.suites}
    />
  })

  let Props = null
  if (Object.keys(properties).length > 1) Props = <Properties onToggle={onToggle} collapsed={collapsed} data={properties} />

  let isCollapsed = Object.keys(collapsed.suites).includes(uuid) ? 'collapsed' : 'expanded'

  let Content = <div className='card-content'>
    {Props}
    {suites}
    {tests.map(test =>
      <Test
        onToggle={onToggle}
        onToggleRaw={onToggleRaw}
        collapsed={collapsed}
        key={`test-${test._uuid}`}
        uuid={test._uuid}
        status={test.status}
        name={test.name}
        message={test.message}
        raw={test.raw}
        time={test.time}
      />
    )}
  </div>

  if (Object.keys(properties).length === 1 && suites.length === 0 && tests.length === 0) Content = null

  return <div className={`card suite is-${isCollapsed}`}>
    <header
      className={`card-header is-${status}`}
      onClick={() => {
        onToggle({ type: 'suites', uuid })
      }}
    >
      <p className='card-header-title'>
        {iconMap[status]}
        <span className='card-header-title-name'>{name}</span>
        {time ? <i className='card-header-title-time'>({time})</i> : null}
      </p>
      <a className='card-header-icon'>
        {iconMap.angleDown}
      </a>
    </header>
    {Content}
  </div>
}

Suite.propTypes = {
  uuid: PropTypes.string.isRequired,
  name: PropTypes.string,
  time: PropTypes.string,
  status: PropTypes.string,
  properties: PropTypes.object,
  tests: PropTypes.array,
  onToggle: PropTypes.func.isRequired,
  onToggleRaw: PropTypes.func.isRequired,
  collapsed: PropTypes.object.isRequired,
  hidden: PropTypes.object.isRequired,
  suites: PropTypes.array
}

export default Suite
