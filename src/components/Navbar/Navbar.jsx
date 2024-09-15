import React from 'react'
import "./Navbar.css"
var Navbar = ()=> {
    return (
      <nav>
        <h1>iTask</h1>
        <ul className="menu">
            <a href="/"><li>Home</li></a>
            <a href="#"><li>Your Tasks</li></a>
        </ul>
      </nav>
    )
  }

export default Navbar
