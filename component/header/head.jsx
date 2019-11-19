import React from 'react'
import Icon from './icon'
import { toLaxTitleCase } from 'titlecase'

const Head = ({ title = 'Xunit Viewer', active, onToggle }) => {
  title = toLaxTitleCase(title)
  return <div className='hero-head'>
    <div className='container'>
      <nav className='navbar'>
        <div className='navbar-brand'>
          <div className='navbar-item'>
            <span
              className={`burger is-${active}`}
              onClick={onToggle}
            >
              <span className='top' />
              <span className='middle' />
              <span className='bottom' />
            </span>
          </div>
        </div>
        <div className='navbar-menu'>
          <Icon />
          <h1 className='title'>{title}</h1>
        </div>
      </nav>
    </div>
  </div>
}

export default Head
