import React from 'react'

import Nav from './Nav'
import Home from './Home'

function App () {
  return (
    <>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className='main'>
        <div className='nav'>
          <Nav />
        </div>
        <div className='home'>
          <Home />
        </div>
      </div>
    </>
  )
}

export default App
