import React from 'react'

function NewStory (props) {
  console.log(props.words.noun)
  const word = props.words
  return (

    <div> <p>
      Pizza was invented by a {word.noun} {word.nationality} chef titled {word.person}. To make a pizza, you need to take a lump of {word.noun}, and make a think, round {word.adjustive}.</p></div>

  )
}

export default NewStory
