import React from 'react'
import Logo from '../assets/blocks.png';
import{Link} from "react-router-dom";
function Home() {
  return (
    <div className='nav'>
      <div>
        <img src={Logo} alt='logo'/>
        </div>
        Home
        <div>
          <Link to="/Home">Home</Link>
          <Link to="/Product">Product</Link>
          <Link to="/Review">Review</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>

        </div>
    </div>
    
  )
}

export default Home