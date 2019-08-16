import React from 'react'
import iconMap from '../icon-map'

let Row = ({ name, value }) => {
  return <tr>
    <td>{name}</td>
    <td>{value}</td>
  </tr>
}

let Properties = ({ data = {}, onToggle, collapsed }) => {
  let isCollapsed = Object.keys(collapsed.properties).includes(data._uuid) ? 'collapsed' : 'expanded'
  return <div className={`card properties is-${isCollapsed}`}>
    <header
      className='card-header'
      onClick={() => {
        onToggle({
          type: 'properties',
          uuid: data._uuid
        })
      }}>
      <p className='card-header-title'>Properties</p>
      <a className='card-header-icon'>
        {iconMap.angleDown}
      </a>
    </header>
    <table className='table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>{
        Object.keys(data)
          .filter(key => key !== '_uuid')
          .map((key, index) => <Row
            key={`properties-${key}-${index}`}
            name={key}
            value={data[key]}
          />
          )
      }</tbody>
    </table>
  </div>
}

export default Properties
