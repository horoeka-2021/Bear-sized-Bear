import React from 'react'
import { Route } from 'react-router-dom'

import Nav from './Nav'
import About from './About'
import Story from './Story'
import AddWord from './AddWords'
import NewStory from './NewStory'

import storyData from '../../data/stories'

function App () {
  return (
    <>
      <div >
        <h1 className='title' >Tall Tales</h1>
      </div>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className='main'>
        <div className='nav'><Route path='/' render={() => <Nav stories={storyData} />} /></div>
        <div className='home'>
          <Route path='/' exact component={About} />
          <Route path='/new-story' exact component={NewStory} />
          <Route path='/add-words' exact component={AddWord} />
          <Route path='/story/:storyTitle' exact render={() => <Story stories={storyData} />} />
        </div>
      </div>
      <div className='bearContainer'>
        <img className='bear' src='/images/logo.png' />
      </div>
    </>
  )
}

export default App
