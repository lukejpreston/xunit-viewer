import React, {PropTypes} from 'react'
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
  collapsed,
  hidden,
  suites = []
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

  return <div className={`card suite is-${isCollapsed}`}>
    <header
      className={`card-header is-${status}`}
      onClick={() => {
        onToggle({type: 'suites', uuid})
      }}
      >
      <p className='card-header-title'>
        {iconMap[status]}
        {name}
      </p>
      <a className='card-header-icon'>
        <span className='icon'>
          <i className='fa fa-angle-down' />
        </span>
      </a>
    </header>
    <div className='card-content'>
      {Props}
      {suites}
      {tests.map(test =>
        <Test
          onToggle={onToggle}
          collapsed={collapsed}
          key={`test-${test._uuid}`}
          uuid={test._uuid}
          status={test.status}
          name={test.name}
          message={test.message}
          />
      )}
    </div>
  </div>
}

Suite.propTypes = {
  uuid: PropTypes.string.isRequired,
  name: PropTypes.string,
  status: PropTypes.string,
  properties: PropTypes.object,
  tests: PropTypes.array,
  onToggle: PropTypes.func.isRequired,
  collapsed: PropTypes.object.isRequired,
  hidden: PropTypes.object.isRequired,
  suites: PropTypes.array
}

export default Suite
