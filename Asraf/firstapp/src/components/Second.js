import React from "react";
import {Link} from "react-router-dom"
<h1>second</h1>
const Second = ()=>{
    return(
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/a">About</Link></li>
      </ul>
    )
}
export default Second