import React from 'react'
import { HashRouter, Link, useParams } from 'react-router-dom'
import Hash from 'hash-string'

function Story (props) {
  const { storyTitle } = useParams()
  const story = props.stories.find(story => story.title === storyTitle)
  const storyText = story.story

  const wordsObj = props.words
  let replacedStoryText

  function replaceAndCleanWords () {
    replacedStoryText = storyText
    for (const [placeholder, userInput] of Object.entries(wordsObj)) {
      replacedStoryText = replacedStoryText.replaceAll(`{{${placeholder}}}`, userInput)
    }

    replacedStoryText = replacedStoryText.replaceAll('. ', '.\n')
    replacedStoryText = replacedStoryText.replaceAll('! ', '!\n')

    return replacedStoryText
  }

  return (
    <div>
      <h2>{story.title}</h2>
      {
        replaceAndCleanWords().split(['\n']).map((sentence, index) => {
          return (
            <p key={Hash(sentence + index)}>
              {sentence}
            </p>
          )
        })
      }
      <br/>
      <img src={story.image} />
    </div>
  )
}

export default Story
