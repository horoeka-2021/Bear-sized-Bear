import React from 'react'
import { Link } from 'react-router-dom'
import Hash from 'hash-string'

function Nav (props) {
  const randomIndex = Math.floor(Math.random() * props.stories.length)
  const randomStory = props.stories[randomIndex]
  return (
    <div>
      <br />
      <h3><Link to='/'>Home</Link></h3>
      <h4><Link to='/new-story'>Create New Story</Link></h4>
      <h4>Choose A Story:</h4>
      <ul>
        <li><Link to={`/story/${randomStory.title}`}>Random Story</Link></li>
        <br />
        {
          props.stories.map(story => {
            return (
              <li key={Hash(story.title)}>
                <Link to={`/story/${story.title}`}>
                  {story.title}
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Nav
