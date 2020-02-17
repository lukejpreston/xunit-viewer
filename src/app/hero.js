import React from 'react'
import Logo from './logo'

const FilterIcon = () => <i className='fas fa-filter' />

export default ({ active, onClick }) => <section className='hero is-black'>
  <div className='container'>
    <div className='columns is-mobile'>
      <div className='column is-1'>
        <button className='filter button has-text-white' onClick={onClick}>
          <span><FilterIcon /> {!active ? 'FILTER' : 'CLOSE'}</span>
        </button>
      </div>
      <div className='column is-11'>
        <div className='hero-center'>
          <Logo />
          <h1 className='title'>Xunit Viewer</h1>
        </div>
      </div>
    </div>
  </div>
</section>
