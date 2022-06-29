import React from "react"
import Menubar from "./Menubar"
import Footer from "./Footer"
import './Services.css'
const Service = () => {
    return ( 
        <React.Fragment>
        <Menubar />
        <div className="services">
        <img src ="https://www.netscribes.com/wp-content/uploads/2019/06/Technology-Watch.jpg" alt="Service" />
        <h1 className="title" style={{  color: "white",fontSize:"43px",marginTop:"20px"}}>SERVICES</h1>
        </div><br /><br />
        <p>We constantly strive and innovate, perform and deliver, strategize and transform new businesses thus contribute in shaping up the new digital world.
NU Technology gives your business the desired standpoint and outcome by delivering effective and high quality IT services and solutions. We constantly strive to reinvent ourselves and deliver standardized solutions. Having partnerships with 100+ customers, including Fortune 100, we help businesses achieve exponential growth. We keep pace with the fast changing digital world and take great pride in it. 
<br />We are in the process of creating a structured network to serve across industries.</p>
 <br />
 <p>NU Technology is one of the world's leading solution provider in the services and manufacturing industry. With our exceptional expertise in various software development platforms and core embedded industry, we strive to be the best when it comes to reliability, quality and support.
Founded in the year 2008 and headquartered at CA, USA, we are presently operating through many countries. Since then, we have been committed towards forging long term business relationships with our clients by providing consistent cutting edge technology. We are also established as ORACLE gold partner.</p>
        <br /><Footer />
        </React.Fragment>
    )
}
export default Service