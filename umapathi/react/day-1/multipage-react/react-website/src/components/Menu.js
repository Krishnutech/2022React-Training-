import React from 'react'
import { Link } from "react-router-dom";
function Menu() {
  return (
    <div>
        <nav>
        <div className='nav-left'>
            <img src='clover.png' width="35" alt='logo' />
        </div>
         <div className='nav-right'>
         <Link to="/">Home</Link>
         <Link to="/about">About</Link>
         <Link to="/services">Services</Link>
         <Link to="/contact">Contact</Link>
         </div>
        </nav>
    </div>
  )
}

export default Menu