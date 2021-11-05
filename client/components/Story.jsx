import React from 'react'
import { HashRouter, Link, useParams } from 'react-router-dom'
import Hash from 'hash-string'

function Story (props) {
  const { storyTitle } = useParams()
  const story = props.stories.find(story => story.title === storyTitle)
  const storyText = story.story

  const wordsObj = props.words

  let replacedStoryText
  function replaceWords () {
    replacedStoryText = storyText
    for (const [placeholder, userInput] of Object.entries(wordsObj)) {
      replacedStoryText = replacedStoryText.replaceAll(`{{${placeholder}}}`, userInput)
    }
    return replacedStoryText
  }
  replaceWords()

  return (
    <div>
      <h2>{story.title}</h2>
      {replacedStoryText.split('.').map(sentence => {
        return (
          <p key={Hash(sentence)}>
            {sentence}.
          </p>
        )
      })}
      <br/>
      <img src={story.image} />
    </div>
  )
}

export default Story
