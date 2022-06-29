import React from 'react'
import{Link} from "react-router-dom"
import logo from "../assets/blocks.png";
import "../Styles/Home.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';

const Navbar = () =>{
    return(
    <div className='nav'>
             <div >
                <img className='im' src={logo} alt='logo'/>
    </div> 
    <div className='bar'>
       <ul>
            <li><Link id="one" to="/">Home</Link></li>
            <li><Link id="one"to="/Service">Service</Link></li>
            <li><Link id="one"to="/about">About</Link></li>
            <li><Link id="one"to="/contact">Contact</Link></li>
            <Link to="/signup"><AccountCircleIcon/></Link>
         
        </ul>
        {/* <SensorOccupiedIcon/> */}
    
    </div>
   </div>


    )
}
export default Navbar