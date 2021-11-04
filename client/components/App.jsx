import React from 'react'

import Nav from './Nav'
import About from './About'

function App () {
  return (
    <>
      <div className='title'>

      </div>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className='main'>
        <Nav />
        <About />
      </div>
    </>
  )
}

export default App
