import React from 'react'
import { Route } from 'react-router-dom'

import Nav from './Nav'
import About from './About'

function App () {
  return (
    <>
      <div className='title'>

      </div>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className='main'>
        <Route path='/' component={Nav} />
        <Route path='/' exact component={About} />
      </div>
    </>
  )
}

export default App
