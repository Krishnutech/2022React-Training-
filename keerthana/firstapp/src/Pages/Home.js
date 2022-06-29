import React from "react"
import Footer from "./Footer";
import './Home.css';
import Menubar from "./Menubar";
const Home = () => {
    return (
        <React.Fragment>
        <Menubar />
        <div className="img">
        <img src ="https://www.nutechnologyinc.com/wp-content/themes/nutechnology/img/final banner-05.jpg" alt="Loading..." />
        </div>
  <div className="row">
  <div className="column">
    <h2>Who We Are</h2>
    <p>
NU Technology is one of the world's leading solution provider in the services and manufacturing industry. With our exceptional expertise in various software development platforms and core embedded industry, we strive to be the best when it comes to reliability, quality and support.
Founded in the year 2008 and headquartered at CA, USA, we are presently operating through many countries.</p>
  </div>
  <div className="column">
    <h2>What We Do</h2>
    <p>NU Technology gives your business the desired standpoint and outcome by delivering effective and high quality IT services and solutions. We constantly strive to reinvent ourselves and deliver standardized solutions. Having partnerships with 100+ customers, including Fortune 100, we help businesses achieve exponential growth. We keep pace with the fast changing digital world and take great pride in it. We are in the 
    process of creating a structured network to serve across industries.</p>
  </div>
  <div className="column">
    <h2>Our Happy Clients</h2>
    <p>Our client spectrum spreads to various industries like retail, airline, healthcare, manufacturing, telecom etc. With 1500+ man years of experience we serve our customers with the right mix of technology and expertise to achieve customer expectation and satisfaction. We believe the best marketing exercise is customer service, so our complete team focus on timely deliveries. 
        quality and customer retention.</p>
  </div>
  </div>
<br />
<Footer />
</React.Fragment>
    )
}
export default Home