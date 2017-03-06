import React, {PropTypes} from 'react'
import Stat from './stat'
import extractStats from './extract-stats'

let Body = ({active, suites, onSearch, onStatToggle, onExpand, onCollapse, onShow, onHide, search, statsStatus}) => {
  let stats = extractStats(suites, search)
  return <div className={`hero-body is-${active} size-${stats.length}`}>
    <div className='container'>{
      stats.map((stat, index) => {
        return <Stat
          statsStatus={statsStatus}
          onExpand={onExpand}
          onCollapse={onCollapse}
          onShow={onShow}
          onHide={onHide}
          onStatToggle={onStatToggle}
          onSearch={onSearch}
          key={`stat-${stat.type}-${index}`}
          name={stat.name}
          total={stat.total}
          type={stat.type}
          icon={stat.icon}
          data={stat.data}
          />
      })
  }</div>
  </div>
}

Body.propTypes = {
  active: PropTypes.string,
  suites: PropTypes.array,
  onSearch: PropTypes.func.isRequired,
  onStatToggle: PropTypes.func.isRequired,
  onExpand: PropTypes.func.isRequired,
  onCollapse: PropTypes.func.isRequired,
  onShow: PropTypes.func.isRequired,
  onHide: PropTypes.func.isRequired,
  search: PropTypes.object.isRequired,
  statsStatus: PropTypes.object
}

export default Body
