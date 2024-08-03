import React from 'react'
import { Link, NavLink } from 'react-router-dom'


function Navbar() {
  return (
    <div
      className='flex justify-between items-center bg-blue-700 text-white mb-8 px-4' 
    >
      <div className='rounded-full'>
        <img src={'/public/Logo.jpg'} alt="Logo" width={52}
        className='rounded-full m-2' 
        />
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

