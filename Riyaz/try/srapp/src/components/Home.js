import React from 'react';
import Navbar from './Navbar';
import '../Styles/Home.css';
// import InstagarmIcon from "@mui/icons-material/Instagram";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Footer from './Footer';

function Home() {
  return (
    <div >
        <Navbar/>
    <div className='section'>
        <img  className="bg"src='https://cdn.create.vista.com/api/media/medium/345685376/stock-photo-top-view-brown-teddy-bear?token='alt='no img'/>
         <h3 className='Quotes'> A cute teddy bear, to my cute friend, on a cute occasions</h3>
   </div>

<div className='container'>
  <div className='box mission'>
   <center> <h2> MISSION</h2></center>
   <hr/>
<p >A Smart Teddy Bear is actually an audio-book player
conceiled as a teddy bear equipped with visual recognition
capability. Now a young child no longer has to wait for his
or her parents to be available to read a book of interest. A
child can listen to his or her favourite story at anytime just by
choosing and showing that book to a smart teddy bear. The
system then automatically recognizes which book is selected
and begins to play the corresponding audio book. This toy is
especially suitable for children from 3 to 5 years old when they
cannot read books by themselves and can release the burden
for their parents</p>
  </div>
  <div className='box Vision'>
  <center>  <h2>VISION</h2></center>
<p>A Smart Teddy Bear is actually an audio-book player
conceiled as a teddy bear equipped with visual recognition
capability. Now a young child no longer has to wait for his
or her parents to be available to read a book of interest. A
child can listen to his or her favourite story at anytime just by
choosing and showing that book to a smart teddy bear. The
system then automatically recognizes which book is selected
and begins to play the corresponding audio book. This toy is
especially suitable for children from 3 to 5 years old when they
cannot read books by themselves and can release the burden
for their parents</p>
  </div>
  <div className='box about'>
    <center><h2>ABOUT</h2></center>
<p>A Smart Teddy Bear is actually an audio-book player
conceiled as a teddy bear equipped with visual recognition
capability. Now a young child no longer has to wait for his
or her parents to be available to read a book of interest. A
child can listen to his or her favourite story at anytime just by
choosing and showing that book to a smart teddy bear. The
system then automatically recognizes which book is selected
and begins to play the corresponding audio book. This toy is
especially suitable for children from 3 to 5 years old when they
cannot read books by themselves and can release the burden
for their parents</p>
  </div>
</div>

<Footer/>





    {/* <div className='rights' >
        <footer className='copy'>
       <InstagarmIcon/>
        <TwitterIcon/> 
        <FacebookIcon/>
        <LinkedInIcon/>
         </footer>
         <p>&copy;Copyright2022</p>
        
    </div> */}
    </div>
  )
}

export default Home 