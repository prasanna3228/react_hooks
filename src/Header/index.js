import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

function Header() {
  return (
    <div className='header'>
      <div className='container'>
        <h1>useState</h1>
        <ul className='nav-links'>
          <Link to="/counter"><li>Counter</li></Link>
          <Link to="/password"><li>Password</li></Link>
          <Link to="/functionalform"><li>Functional Form</li></Link>
          <Link to="/functionalcounter"><li>Functional Counter</li></Link>
          <Link to="/usestate"><li>UseState</li></Link>
          <Link to="/namevalidation"><li>Name Validation</li></Link>
        </ul>
      </div>

      <div className='container'>
        <h1>useEffect</h1>
        <ul className='nav-links'>
          <Link to="/useeffect"><li>UseEffect</li></Link>
          <Link to="/setinterval"><li>setInterval</li></Link>
          <Link to="/apiintegration"><li>ApiIntegration</li></Link>
          <Link to="/functionalform"><li>Functional Form</li></Link>
          <Link to="/functionalcounter"><li>Functional Counter</li></Link>
          <Link to="/usestate"><li>UseState</li></Link>
          <Link to="/namevalidation"><li>Name Validation</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Header
