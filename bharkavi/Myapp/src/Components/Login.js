import React from "react";
import Menubar from "./Menubar";
import Footer from "./Footer";
import "./Footer.css"
import "./Login.css"
const Login=() =>{
    return(
      <div>
          <Menubar />
   <br /><br />
         <div className="form3">
          <h1>CONTACT US</h1>
      <form>
        <div className="form4">
        <input type="text" placeholder="email" />
        </div>
        <div className="form4">
        <input type="password" placeholder="password" />
        </div>
        <div className="form4">
        <button>Submit</button>
        </div>
      </form>
      </div>
      <br /><br />
         <Footer />
      </div> 
    )
}
export default Login