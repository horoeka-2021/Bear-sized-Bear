import React, { useState } from 'react'
import { Route } from 'react-router-dom'

import Nav from './Nav'
import About from './About'
import Story from './Story'
import AddWords from './AddWords'
import NewStory from './NewStory'

import storyData from '../../data/stories'

const initial =
  { noun: '', adjective: '', nationality: '', plural_noun: '', person: '', shapes: '', food: '', number: '' }

const words = {
  adjective: 'big',
  nationality: 'New Zealand',
  person: 'Sean',
  'plural noun': 'eels',
  noun: 'ball',
  shapes: 'rhombus',
  food: 'steak',
  number: '1',
  verb: 'run',
  place: 'Auckland',
  vegetable: 'banana',
  exclamation: 'WAT',
  color: 'red',
  'verb ending in -ing': 'running',
  'verb past tense': 'typed',
  adverb: 'quickly',
  celebrity: 'Chris Parker',
  'silly word': 'goose',
  "friend's name": 'Ahmad',
  animal: 'dog'
}

function App () {
  const [words, setWords] = useState(initial)

  return (
    <>
      <div >
        <h1 className='title' >Tall Tales</h1>
      </div>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className='main'>
        <div className='nav'>
          <Route path='/' render={() => <Nav stories={storyData} />} />
        </div>
        <div className='home'>
          <Route path='/' exact component={About} />

          <Route path='/new-story' exact render={() => <NewStory words={words} />} />
          <Route path='/add-words' exact
            render={() => <AddWords words={words} setWords={setWords} />}/>
          <Route path='/story/:storyTitle' exact render={
            () => {
              return (
                <Story
                  stories={storyData}
                  words={words}
                />
              )
            }
          } />
        </div>
      </div>
      <div className='bearContainer'>
        <img className='bear' src='/images/logo.png' />
      </div>
    </>
  )
}

export default App
