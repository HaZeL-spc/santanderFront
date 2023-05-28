import React from 'react'
import "../styles/Navbar.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="wrapper">
      <div className="sidebar">
          <Link to="/"><h2>SANTANDER</h2></Link>
          <ul>
              <li><Link to="first"><i className="fas"></i>First</Link></li>
              <li><Link to="second"><i className="fas"></i>Second</Link></li>
              <li><Link to="third"><i className="fas"></i>Third</Link></li>
              <li><Link to="fourth"><i className="fas"></i>Fourth</Link></li>
          </ul>
      </div>
      </div>
  )
}

export default Navbar
