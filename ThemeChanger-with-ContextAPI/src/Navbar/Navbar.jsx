import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <div>

      </div>
      <ul>
        <li>
          <NavLink to = '/'>Home</NavLink>
        </li>
        <li>
          <NavLink to = 'About'>About</NavLink>
        </li>
        <li>
          <NavLink to = 'Github'>Github</NavLink>
        </li>
        <li>
          <NavLink to = 'Contact'>Contact</NavLink>
        </li>
      </ul>
      
    </div>
  )
}

export default Navbar

