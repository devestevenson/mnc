import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <nav className='navbar'>

        <ul className='navbar-box'>
            <li><Link to='/Form'>Form</Link></li>
            <li><Link to='/News'>News</Link></li>
            <li><Link to='/Table'>Table</Link></li>
        </ul>
      
    </nav>
  )
}

export default Nav
