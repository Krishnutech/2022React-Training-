import React from 'react';
class Header extends React.Component {
constructor(){
 super()
 this.state = {
     websiteName :"My Website"
 }
}
    render() { 
        return(
        <div className = "head" style={{color:"#32a852"}}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" style ={{width:"200px",height:"170px",marginTop:"20px"}} alt="No Image" />
        
           <div className="text" style={{marginBottom:"20px",marginLeft:"60px"}}>{this.state.websiteName}</div>
        
            </div>
        )
    }

 }
export default Header