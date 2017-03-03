import React, {PropTypes} from 'react'
import Head from './head'
import Body from './body'

let Header = ({suites = [], title, onToggle, onStatToggle, onExpand, onCollapse, onShow, onHide, onSearch, isActive, search, statsStatus}) => {
  let active = isActive ? 'active' : 'inactive'
  return <section className='hero'>
    <Head
      title={title}
      active={active}
      onToggle={onToggle} />
    <Body
      statsStatus={statsStatus}
      suites={suites}
      active={active}
      onSearch={onSearch}
      onExpand={onExpand}
      onCollapse={onCollapse}
      onShow={onShow}
      onHide={onHide}
      onStatToggle={onStatToggle}
      search={search} />
  </section>
}

Header.propTypes = {
  suites: PropTypes.array,
  title: PropTypes.string,
  isActive: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
  onStatToggle: PropTypes.func.isRequired,
  onExpand: PropTypes.func.isRequired,
  onCollapse: PropTypes.func.isRequired,
  onShow: PropTypes.func.isRequired,
  onHide: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  search: PropTypes.object.isRequired,
  statsStatus: PropTypes.object
}

export default Header
