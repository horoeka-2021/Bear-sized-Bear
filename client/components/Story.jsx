import React from 'react'
import { Link, useParams } from 'react-router-dom'

function Story (props) {
  const { storyTitle } = useParams()
  const story = props.stories.find(story => story.title === storyTitle)
  console.log(story);
  const storyText = story.story
  console.log(storyText.split('.'));
  return (
    <div>
      <h2>{story.title}</h2>
      {storyText.split('. ').map(sentence => {
        return ( <p>{sentence}.</p> )
      })}
    </div>
  )
}

export default Story
