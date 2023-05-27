import React from 'react'
import "../styles/Navbar.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="wrapper">
      <div className="sidebar">
          <Link to="/"><h2>SANTANDER</h2></Link>
          <ul>
              <li><Link to="first"><i className="fas fa-home"></i>First</Link></li>
              <li><Link to="second"><i className="fas fa-user"></i>Second</Link></li>
              <li><Link to="third"><i className="fas fa-address-card"></i>Third</Link></li>
              <li><Link to="fourth"><i className="fas fa-project-diagram"></i>Fourth</Link></li>
          </ul>
      </div>
      </div>
  )
}

export default Navbar
