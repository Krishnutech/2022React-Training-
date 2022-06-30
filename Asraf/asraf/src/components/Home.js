import React from 'react'
import Menu from './Menu'
import Footer from './Footer'
import'./Home.css'
function Home() {
  return (
    <div>
       

       <Menu />
       
        <h1>Welcome to APPLE</h1>
        <div className="pic">
            <img src="https://media.wired.com/photos/6149204955f7b3aea723343d/master/pass/Gear-Review-Apple_iPhone-13-Pro_Colors_09142021.jpg" alt="Iphone" style={{width:"100vw",height:"700px"}} />
            <div className="container">
           <h3>APPLE</h3>
           </div>
           <br/>
           <div className="a">
           <div className="cont">
           <h1>VISION</h1>
           <hr />
           <p>Apple's mission is “to bring the best user experience to its customers through its innovative hardware, software, and services.” And in a manifesto dated 2019 Tim Cook set the vision specified as “We believe that we are on the face of the earth to make great products and that's not changing.” Why does it matter?</p>
           </div>
           <br/>
           <div className="con">
           <h1>MISSION</h1>
           <hr />
           <p>"Apple strives to bring the best personal computing experience to students, educators, creative professionals, and consumers around the world through its innovative hardware, software, and internet offerings."</p>
           </div>
           <div className="co1">
           <h1>ABOUTUS</h1>
           <hr />
           <p>Apple hardware, software and services work together to deliver a seamless experience that just works. You can start a project on Mac and finish it on iPad, use your screens side by side to extend your workspace, and even draw with Apple Pencil on your iPad or use your iPhone to make live updates on your Mac. And it’s all compatible with apps from Microsoft and Google, so your team has everything it needs to get any job done.</p>
           </div>
           
           <br/>
        </div>
</div>
        <Footer />
        
            
        
        </div>
  )
}

export default Home