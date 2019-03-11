import React from 'react'

import Hero from './hero'
import Options from './options'

const App = () => <div>
  <Hero />
  <header>
    <div className='container'>
      <Options label='Suites' count={52} total={1000} passed={12} failed={12} warning={12} skipped={12} unknown={12} />
      <Options label='Tests' count={999} total={100} passed={12} failed={12} warning={12} skipped={12} unknown={12} />
      <Options label='Properties' count={52} total={100} passed={12} failed={12} warning={12} skipped={12} unknown={12} />
    </div>
  </header>
</div>

export default App
