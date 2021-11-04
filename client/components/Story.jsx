import React from 'react'
import { Link, useParams } from 'react-router-dom'

function Story (props) {
  const { storyTitle } = useParams()
  const story = props.stories.find(story => story.title === storyTitle )
  const storyText = story.text
  return (
    <div>
      <h2>{story.title}</h2>
      <p>{storyText}</p>
    </div>
  )
}

export default Story
