import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div
      className='flex justify-between items-center bg-blue-700 text-white' 
    >
      <div>
        <h1>Logo</h1>
      </div>
      <ul
        className='flex text-lg gap-12 font-semibold py-2'
      >
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

