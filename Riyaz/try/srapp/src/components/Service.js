import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../Styles/Service.css'


function Service() {
  return (
    <div>
        <Navbar />
        <div className='serv'>
          <img className='bg' src='https://thumbs.dreamstime.com/b/teddy-bear-heart-old-wooden-background-valentine-s-teddy-bear-red-heart-old-wooden-background-valentine-s-day-169694175.jpg' alt='no img'/>
         <h1>Service</h1> 
        </div>
        <div class="services">
                
                </div>
                <div className="Master">
                <h2 id="h2">Services</h2>
                <br/>
                <h2 id="h2">We Provide</h2>
                <br/>
                <p className="p1">Services are the non-physical, intangible parts of our economy, as opposed to goods, which we can touch or handle. Services, such as banking, education, medical treatment, and transportation make up the majority of the economies of the rich nations.
                A service is an "(intangible) act or use for which a consumer, firm, or government is willing to pay." Examples include work done by barbers, doctors, lawyers, mechanics, banks, insurance companies, and so on.
                </p>
                <br/>
                <p className="p1">
                    <pre>The story of your brand and why you started it.<br/> 
                                The cause or customers that your business serves.<br/>
                                Your business model or how your products are sourced/manufactured.<br/>
                      </pre>
                                <br/>
                                Take the visitors on your website to a trip down memory lane, and give them an insight to the history behind your store. Here, you can show them where, how, and when you started, and everything your business has accomplished on the way. This is your chance to share your relevant milestones and achievements relating to your business in an engaging way.</p>
                </div>
        <Footer />
    </div>
  )
}

export default Service