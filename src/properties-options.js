import React from 'react'
import Toggle from './toggle'

const Search = ({ label }) => <div className='field options-search'>
  <div className='control'>
    <input className='input' type='text' placeholder={label} />
  </div>
</div>

const Total = ({ count, total }) => <div className='options-total'>
  <b>{count}</b><span>/{total}</span>
</div>

const EyeIcon = () => <span className='icon'>
  <i className='fas fa-eye' />
</span>

const EyeSlashIcon = () => <span className='icon'>
  <i className='fas fa-eye-slash' />
</span>

const ChevronUpIcon = () => <span className='icon'>
  <i className='fas fa-chevron-up' />
</span>

const ChevronDownIcon = () => <span className='icon'>
  <i className='fas fa-chevron-down' />
</span>

export default ({ count = 0, total = 0 }) => {
  return <div className={`options card`}>
    <header className='card-header'>
      <div className='options-inputs'>
        <Search label='Propeties' />
        <Total count={count} total={total} />
      </div>
    </header>
    <div className='card-content'>
      <div>
        <Toggle
          active
          onLabel='Expanded'
          offLabel='Contracted'
          offIcon={<ChevronUpIcon />}
          onIcon={<ChevronDownIcon />} />
      </div>
      <div>
        <Toggle
          active
          onLabel='Visible'
          offLabel='Hidden'
          onIcon={<EyeIcon />}
          offIcon={<EyeSlashIcon />} />
      </div>
    </div>
  </div>
}
