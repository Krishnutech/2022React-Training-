import React from "react"
import {Link} from "react-router-dom"
// import Footer from "./Footer"
import "./Menubar.css"
const Menubar =() =>{
    return(
        <div className="nav">
            <div className="logo">
             <img src="https://design-studio.io/wp-content/uploads/2018/05/Logo-6-Bigimage.jpg" />
            </div>
               <ul >
               <li><Link to="/">Home</Link></li>
               <li><Link to="/about">About</Link></li>
               <li><Link to="/services">Services</Link></li>
               <li><Link to="/contactus">Contactus</Link></li>
               <li><Link to="Login">Login</Link></li>
               {/* <li><Link to="Login1">Login1</Link></li> */}
            </ul> 
        </div>    
        
    )
}
export default Menubar