import React from 'react'
import ChevronLeft from '../icons/chevron-left'
import Expand from '../icons/expand'
import Compress from '../icons/compress'
import Eye from '../icons/eye'
import EyeSlash from '../icons/eye-slash'
import Search from '../icons/search'

const Icon = ({ children, right = false }) => {
  return <i className={`icon is-small is-${right ? 'right' : 'left'}`}>
    {children}
  </i>
}

const Count = ({ icon, name, total, type, category, onStatToggle }) => {
  category = name || category
  return <li className={`toggle is-${type}`}>
    <a
      className='count'
      onClick={() => {
        onStatToggle({ name: category, type })
      }}
    >
      {icon}
      <span>{name} <b>{total}</b></span>
    </a>
  </li>
}

const Options = ({ name, type, category, onStatToggle, onExpand, onCollapse, onShow, onHide }) => {
  category = name || category
  return <li className={`toggle is-${type}`}>
    <a
      title='cancel'
      className='change'
      onClick={() => {
        onStatToggle({ name: category, type })
      }}
    >
      <Icon><ChevronLeft /></Icon>
    </a>
    <a
      title='expand'
      className='change'
      onClick={() => {
        onExpand({ name: category, type })
      }}
    >
      <Icon><Expand /></Icon>
    </a>
    <a
      title='contract'
      className='change'
      onClick={() => {
        onCollapse({ name: category, type })
      }}
    >
      <Icon><Compress /></Icon>
    </a>
    <a
      title='show'
      className='change'
      onClick={() => {
        onShow({ name: category, type })
      }}
    >
      <Icon><Eye /></Icon>
    </a>
    <a
      title='hide'
      className='change'
      onClick={() => {
        onHide({ name: category, type })
      }}
    >
      <Icon><EyeSlash /></Icon>
    </a>
  </li>
}

const Toggle = ({ icon, name, total, type, category, onStatToggle, onExpand, onCollapse, onShow, onHide, statsStatus }) => {
  let Content = Count
  category = name || category
  category = category.toLowerCase()
  if (statsStatus && statsStatus[category] && statsStatus[category][type]) {
    Content = Options
  }

  return <Content
    icon={icon}
    name={name}
    total={total}
    type={type}
    category={category}
    onStatToggle={onStatToggle}
    onExpand={onExpand}
    onCollapse={onCollapse}
    onShow={onShow}
    onHide={onHide}
  />
}

const Stat = ({ icon, name, total, type, data = [], onSearch, onStatToggle, onExpand, onCollapse, onShow, onHide, statsStatus }) => {
  return <div className='subtitle'>
    <div className='tabs is-toggle'>
      <ul>
        <li>
          <div className='field search'>
            <div className='control has-icons-right'>
              <input
                className='input' placeholder={`Search ${name}`} onChange={evt => {
                  onSearch(evt.target.value, type)
                }}
              />
              <Icon right><Search /></Icon>
            </div>
          </div>

        </li>
        <Toggle
          onStatToggle={onStatToggle}
          onExpand={onExpand}
          onCollapse={onCollapse}
          onShow={onShow}
          onHide={onHide}
          icon={icon}
          name={name}
          total={total}
          type={type}
          statsStatus={statsStatus}
        />
        {
          data.map((toggle, index) => {
            return <Toggle
              onStatToggle={onStatToggle}
              onExpand={onExpand}
              onCollapse={onCollapse}
              onShow={onShow}
              onHide={onHide}
              key={`toggle-${type}-${index}`}
              icon={toggle.icon}
              category={name}
              name={toggle.name}
              total={toggle.total}
              active={toggle.active}
              type={toggle.type}
              statsStatus={statsStatus}
            />
          })
        }
      </ul>
    </div>
  </div>
}

export default Stat
