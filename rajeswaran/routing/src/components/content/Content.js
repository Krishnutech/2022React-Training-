
import React ,{useState,useEffect}from 'react';
import './Content.css';
import { NavLink } from "react-router-dom"

function Content() {
  const[person,setName]=useState('');
  

  useEffect(() => {
     const pathname=window.location.pathname
     const paths=pathname.split('/')
     const personname=paths[2]    
     setName(personname)
  },[])
  console.log(person)
  
 return (
   <div>   

    <NavLink to={{pathname:`/third/`}}className={isActive => "box1" + (!isActive ? " unselected" : "")}>
              
           <div className="box1">
            <div className="box2">            
              <h1>CONTENT</h1>      
                   
            </div>               
      </div>    
      </NavLink>  
    </div>
  );
}
export default Content;











/*class Content extends React.Component{
  constructor(props){
    super(props)
    const pathname=window.location.pathname
    const paths=pathname.split('/')
    const personname=paths()
    console.log(personname)
    this.courses=props.courses
    this.state={
      personname:personname,
      course=this.courses.find(course=>course.login==personname)
    }
  }  


render(){
   return (
  <div>
        
             <div className="box1">
              <div className="box2">
                <h1>second page</h1>
                <p>something happen</p>
                
              </div>
        </div>
      </div>
    );
   }

}


export default Content;*/
