import React from 'react'
import { Route } from 'react-router-dom'

import Nav from './Nav'
import About from './About'
import Story from './Story'
import NewStory from './NewStory'

import storyData from '../../data/stories'

function App () {
  return (
    <>
      <div className='title'>
        <img src='/images/logo.png' />
        <h1>Bear Sized Bear</h1>
      </div>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className='main'>
        <Route path='/' render={() => <Nav stories={storyData} />} />
        <Route path='/' exact component={About} />
        <Route path='/new-story' exact component={NewStory} />
        <Route path='/story/:storyTitle' exact render={() => <Story stories={storyData} />} />
      </div>
    </>
  )
}

export default App
