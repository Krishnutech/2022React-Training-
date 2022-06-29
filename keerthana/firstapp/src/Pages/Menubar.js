import React from "react"
import {Link} from "react-router-dom"
import './Menubar.css';
const Menubar = ( ) => {
    return (

        <div className="navbar">
        <ul className="nav-list" >
        <img   className="img" src="https://www.nutechnologyinc.com/wp-content/themes/nutechnology/img/logo.svg" alt="Logo"></img>
        <li><Link to = "/" style={{textDecoration:'none'}}><h3>Home</h3></Link></li>  
        <li><Link to = "/about" style={{textDecoration:'none'}}><h3>About</h3></Link></li>  
        <li><Link to = "/service" style={{textDecoration:'none'}}><h3>Services</h3></Link></li> 
        <li><Link to = "/contact" style={{textDecoration:'none'}}><h3>Contact</h3></Link></li> 
        <li><Link to = "/login" style={{textDecoration:'none'}}><h3>LogIn</h3></Link></li> 
        </ul>
        </div>   

    )
}
export default Menubar