import React from 'react'

import Home from './Home'
import Nav from './Nav'

function App () {
  return (
    <>
      <div className='title'>

      </div>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className='main'>
        <Nav className='navBar' />
        <Home />
      </div>
    </>
  )
}

export default App
