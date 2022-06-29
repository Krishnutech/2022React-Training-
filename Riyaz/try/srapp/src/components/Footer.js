import React from 'react'
import InstagarmIcon from "@mui/icons-material/Instagram";
 import TwitterIcon from "@mui/icons-material/Twitter";
 import FacebookIcon from "@mui/icons-material/Facebook";
 import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <div> <div className='rights' >
    <footer className='copy'>
   <InstagarmIcon/>
    <TwitterIcon/> 
    <FacebookIcon/>
    <LinkedInIcon/>
     </footer>
     <p>&copy;Copyright2022</p>
    
</div></div>
  )
}

export default Footer