import React from "react"
import {Link} from "react-router-dom"
import './Menu.css';
const Menu = () =>{
    return (
<>
<header><h3>Login/Signup</h3></header>
<div className="menu">
<div className="logo">
<img className="im"src="https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg" />
</div>

        <ul className="p">
        <li><Link id="one" to='/'>Home</Link></li> 
        <li><Link id="one"to='/a'>About</Link></li>
        <li><Link id="one"to='/s'>Services</Link></li>
        <li><Link id="one"to='/c'>Contactus</Link></li> 
        </ul>  
        </div>
       
        </>


    )
}
export default Menu