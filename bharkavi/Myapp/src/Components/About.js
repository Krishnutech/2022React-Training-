import React from "react";
import Footer from "./Footer";
import Menubar from "./Menubar";
import "./About.css"
const About =() =>{
    return(
    <div>
     <Menubar />
      <div className="about">
          <h1 className="topic">ABOUT US</h1>
      </div>
      <div className="about1">
          <img src="https://img.freepik.com/free-photo/fresh-food-groceries-tray-box-wood-tabletop-banner-background_8087-2719.jpg?w=2000" alt="" />
          <div className="about2">
              <p>"STAR is India’s most pioneering and significant modern retailer for fresh food and groceries. 
               We offer our customers a wide range of daily essentials, fresh produce, poultry and a host of exclusive TATA brands at great value."</p>
            </div>
         </div>
         <div className="about5">
            <br />
           <div className="about3">
           <p>To be an independent, innovative, honest and sustainable cooperative in which customers are able to choose from a wide range of goods at reasonable prices</p>
           <img src="https://natra.com/app/uploads/2021/06/icon_vision-1.png" alt=""></img>
         </div>
        <br />
        <br />
        <div className="about4">
          <p>To satisfy our partners and customers with a unique shopping experience offering quality, variety, price and service, based on the attention and commitment of our employees. “Committed workers, satisfied customers”</p>
        <img src="https://natra.com/app/uploads/2021/06/icon_mission-1.png" alt="" />
        </div>
        <br />
        <h1>MEMBERS</h1>
        <div className="avatar">
          
        <div>
        <br />
        <br />
        <br />
        <img src="https://cdn3.iconfinder.com/data/icons/diverse-cartoon-women-avatars/300/20-512.png" alt="" />
        <h2>MEMBER 1</h2>
        </div>
        <div>
        <br /><br /><br />
        <img src="https://cdn1.iconfinder.com/data/icons/human-resources-1-6/128/86-512.png" alt="" />
         <h2>MEMBER 2</h2>
         </div>
         <div>
         <br /><br /><br />
         <img src="https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_person_people_avatar_icon_159366.png" alt="" />
         <h2>MEMBER 3</h2></div>
        </div>
        <br />
        <br />
     <Footer />
    </div>
    </div>
    )
}
export default About