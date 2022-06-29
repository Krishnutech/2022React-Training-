import React from "react";
import Footer from "./Footer";
import Menubar from "./Menubar";
import "./Home.css"
const Home =() =>{
    return(
        <div className="nav1">
            <Menubar />
         <div className="content">
         <img src="https://i.pinimg.com/originals/8e/8d/0e/8e8d0ed1434bb14c289181ccdc9d0450.jpg"/>
         </div>
         <div className="container">
           <h3>FRESH AND ORGANIC PRODUCTS FOR YOUR BENEFITS</h3>
           </div>
           <br/>
           <div className="a">
           <div className="cont">
           <h1>VISION</h1>
           <hr />
           <p>To be an independent, innovative, honest and sustainable cooperative in which customers are able to choose from a wide range of goods at reasonable prices</p>
           </div>
           <br/>
           <div className="con">
           <h1>MISSION</h1>
           <hr />
           <p>To satisfy our partners and customers with a unique shopping experience offering quality, variety, price and service, based on the attention and commitment of our employees. “Committed workers, satisfied customers”</p>
           </div>
           <div className="co1">
           <h1>ABOUTUS</h1>
           <hr />
           <p>We are committed to providing wholesome products that fit your lifestyle. 
            That is why we continue to add to our growing list of natural, organic and gluten-free lines. It is part of living up to our promise to provide you with fresh, nutritious foods in convenient, easy-to-shop, locations. You can find these great offerings in all of the departments throughout our store.</p>
           </div>
           </div>
           <br/>
           <Footer />
        </div>
          
    )
}
export default Home