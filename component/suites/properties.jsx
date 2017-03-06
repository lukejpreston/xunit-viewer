import React, {PropTypes} from 'react'

let Row = ({name, value}) => {
  return <tr>
    <td>{name}</td>
    <td>{value}</td>
  </tr>
}

Row.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string
}

let Properties = ({data = {}, onToggle, collapsed}) => {
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
        <span className='icon'>
          <i className='fa fa-angle-down' />
        </span>
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

Properties.propTypes = {
  data: PropTypes.object,
  onToggle: PropTypes.func.isRequired,
  collapsed: PropTypes.object.isRequired
}

export default Properties
