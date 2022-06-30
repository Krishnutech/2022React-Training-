import React from 'react'
import Menu from './Menu'
import Footer from './Footer'
import  './About.css'

function About() {
  return (
    <div>  
        <Menu />
        <div className='ab'>
        <h1>  About</h1>
        <div className='image'>
            <img src="https://i.pinimg.com/originals/f0/f5/a6/f0f5a6cc6bff547d2c7d5cbcb00bea85.png" alt ="" />
       </div>
       <div className='about'>
        <p>Sales and Product Inquiries
        Apple Online Store
        Apple.com is a convenient place to purchase Apple products and accessories from Apple. You can buy online or call 000800 040 1966.

        You can get information about an order you placed on the Apple Online Store through the Order Status page. If you prefer, you can also get order status or make changes by phone at 000800 040 1966.

        How to Buy for Education
        If you are a student or teacher, visit the Apple Store for Education or call 000800 040 1966.
        Find Apple Authorised Resellers
        Use our Reseller Locator to find an Apple Authorised Reseller in India.
        Apple Authorised Resellers offer industry expertise, multi-platform services and Mac-based solutions for a wide variety of organisations.</p>
        </div>
        <div className='about1'>
      <p>Apple's mission is “to bring the best user experience to its customers through its innovative hardware, software, and services.” And in a manifesto dated 2019 Tim Cook set the vision specified as “We believe that we are on the face of the earth to make great products and that's not changing.” Why does it matter?</p>
       <img src="https://previews.123rf.com/images/convisum/convisum1404/convisum140400059/27317592-our-vision.jpg"></img>
        </div>
        <div className='about2'>
        <p>"Apple strives to bring the best personal computing experience to students, educators, creative professionals, and consumers around the world through its innovative hardware, software, and internet offerings."</p>
          <img src="https://thumbs.dreamstime.com/b/our-mission-yellow-lightbulb-text-blackboard-193365843.jpg"/>
        </div>
        <h1>Team</h1> 
        <br />    
        <div className='avatar'> 
        <br />  <br />
        <div>
        <img src="https://www.seekpng.com/png/full/114-1149972_avatar-free-png-image-avatar-png.png" alt="Avatar"/>
        <h1>Member1</h1>
        </div> 
        <div>  
        <img src="https://www.seekpng.com/png/full/114-1149972_avatar-free-png-image-avatar-png.png" alt="Avatar"/>
        <h1>Member2</h1>
        </div> 
        <div>  
     
        <img src="https://www.seekpng.com/png/full/114-1149972_avatar-free-png-image-avatar-png.png" alt="Avatar"/>
        <h1>Member3</h1>
        </div> 
        </div> 
        
       <Footer />
     </div>
     </div>
  )
}

export default About