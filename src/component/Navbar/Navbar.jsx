import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
            <Link to='/'><h1>Camp Coffee.</h1></Link>            
        </div>
        <div className="navigasi">
            <Link to='/menu'>Menu</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/book'>Book a table</Link>
        </div>
    </div>
  )
}

export default Navbar