import React from "react"
import {NavLink} from "react-router-dom"

import './Home.css';
import './Footer.css';
const Home = () => {
    return(
      
      <React.Fragment> 
        <ul>
            <li><NavLink to="/" activeStyle={{color:"red"}}>Home</NavLink></li>
            <li><NavLink to="/about" activeStyle={{color:"red"}}>About Us</NavLink></li>
            <li><NavLink to="/dashboard" activeStyle={{color:"red"}}>Dashboard</NavLink></li>
            <li><NavLink to="/c" activeStyle={{color:"red"}}>Contact Us</NavLink></li>
        </ul>
        {/* <h1>Hiii</h1> */}
    
        </React.Fragment>   
      
    )
}
export default Home