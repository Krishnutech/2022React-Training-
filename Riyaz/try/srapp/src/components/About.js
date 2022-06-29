import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../Styles/About.css'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'


function About() {
  return (<>
    <Navbar />
    <h1 className='a'>About</h1>
    <div >
       <div className='ab'> 
    
      <img className='abimage' src='https://wallpaperaccess.com/full/1253427.jpg' alt='no img'/>
    
      <p className='abo'>A Smart Teddy Bear is actually an audio-book player
conceiled as a teddy bear equipped with visual recognition
capability. Now a young child no longer has to wait for his
or her parents to be available to read a book of interest. A
child can listen to his or her favourite story at anytime just by
choosing and showing that book to a smart teddy bear. The
system then automatically recognizes which book is selected
and begins to play the corresponding audio book. This toy is
especially suitable for children from 3 to 5 years old when they
cannot read books by themselves and can release the burden
for their parents. Furthermore children have more exciting
experience with their common toys</p>
{/* </div> */}
{/* <div className='total'>
  <div className='image'>
<AccountCircleIcon />
  </div>
  <div className='image'>
    <img src=" " alt =" " />
  </div>
  <div className='image'>
    <img src=" " alt =" " />
  </div>*/}
</div>
<div className='ab'>
<h2 className='b'>Mission</h2> 
<p className='ais'>Services are the non-physical, intangible parts of our economy, as opposed to goods, which we can touch or handle. Services, such as banking, education, medical treatment, and transportation make up the majority of the economies of the rich nations.
                A service is an "(intangible) act or use for which a consumer, firm, or government is willing to pay." Examples include work done by barbers, doctors, lawyers, mechanics, banks, insurance companies, and so on.</p>
  <img src='https://media.istockphoto.com/photos/brown-teddy-bear-isolated-in-front-of-a-white-background-picture-id909772478?b=1&k=20&m=909772478&s=170667a&w=0&h=u4Oy3V1skWloEvYGFVQFR3ZHmxcwNN8CffIaWNeEEAI=' alt='img'/>
  </div>
  <div className='ab'>
  <h2 className='b'>Vision</h2>
  <img  className='vis'src='https://thumbs.dreamstime.com/b/cute-teddy-bear-white-background-29292281.jpg'alt='img'/>
  <p className='visi'> The story of your brand and why you started it.The cause or customers that your business serves,Your business model or how your products are sourced/manufactured</p>
  </div>
<h2 className='b'>Team Members</h2>
<div className='ke' >
<h4>Member1</h4>
  <img className='img' src={img1} alt='no'/>
  <h4>Member2</h4>
  <img className='img'src={img2} alt='no'/>
  <h4>Member3</h4>
  <img className='img'src={img3} alt='no'/>
  
</div>
    </div> 
    < Footer />
    </>
  )
}

export default About