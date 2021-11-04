import React from 'react'
import { Link } from 'react-router-dom'

function Nav () {
  return (
    <div>
      <h2>Actions</h2>
      <h3><Link to='/'>Make New Story</Link></h3>
      <ul>
        <li><Link to='/'>Random Story</Link></li>
        <li>{"{iterate over stories}"}</li>
      </ul>
    </div>
  )
}

export default Nav
