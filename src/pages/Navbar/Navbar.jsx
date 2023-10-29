import React from 'react'
import './Navbar.scss'

function Navbar() {
  return (
    <nav>
        <div className="logo">a</div>
        <ul className="navbar__links">
            <li><a href="#about">about</a></li>
            <li><a href="">experience</a></li>
            <li><a href="">skill</a></li>
            <li><a href="#contact">contact  </a></li>
            <li><a href="" className="button">resume</a></li>
        </ul>
    </nav>
  )
}

export default Navbar
