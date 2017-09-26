import React, {PropTypes} from 'react'
import Icon from './icon'
import { toLaxTitleCase } from 'titlecase'

let Head = ({title = 'Xunit Viewer', active, onToggle}) => {
  title = toLaxTitleCase(title)
  return <div className='hero-head'>
    <header className='nav'>
      <div className='container'>
        <div className='nav-left'>
          <span
            className={`burger is-${active}`}
            onClick={onToggle}>
            <span className='top' />
            <span className='middle' />
            <span className='bottom' />
          </span>
        </div>
        <div className='nav-center'>
          <Icon />
          <h1 className='title'>{title}</h1>
        </div>
        <div className='nav-right' />
      </div>
    </header>
  </div>
}

Head.propTypes = {
  title: PropTypes.string,
  active: PropTypes.string,
  onToggle: PropTypes.func
}

export default Head
