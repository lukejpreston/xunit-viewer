import React from 'react'
import Logo from './logo'
import { Slider } from 'react-burgers'

export default ({ active, onClick }) => <section className='hero is-black'>

  <div className='container'>
    <div className='columns is-mobile'>
      <div className='column is-1'>
        <Slider className='button' active={active} onClick={onClick} borderRadius={4} color='#fff' />
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
