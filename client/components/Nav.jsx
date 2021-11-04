import React from 'react'
import { Link } from 'react-router-dom'
import Hash from 'hash-string'

function Nav (props) {
  return (
    <div>
      <h2>Actions</h2>
      <h3><Link to='/'>Home</Link></h3>
      <h3><Link to='/new-story'>Make New Story</Link></h3>
      <ul>
        <li><Link to='/random'>Random Story</Link></li>
        {
          props.stories.map(story => {
            return (
              <li key={Hash(story.title)}>
                <Link to={`/${story.title}`}>
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
