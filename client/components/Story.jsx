import React from 'react'
import { Link, useParams } from 'react-router-dom'

function Story (props) {
  const { storyTitle } = useParams()
  console.log(storyTitle)
  const story = props.stories[storyTitle]

  return (
    <div>
      <h2>{story.title}</h2>
      <p>{story.story}</p>
    </div>
  )
}

export default Story
