import React from 'react'
import Head from './head'
import Body from './body'

const Header = ({ suites = [], title, onToggle, onStatToggle, onExpand, onCollapse, onShow, onHide, onSearch, isActive, search, statsStatus }) => {
  const active = isActive ? 'active' : 'inactive'
  return <section className='hero'>
    <Head
      title={title}
      active={active}
      onToggle={onToggle}
    />
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
      search={search}
    />
  </section>
}

export default Header
