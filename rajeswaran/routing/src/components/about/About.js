
import { NavLink} from "react-router-dom"

function About() {
 return (
   <div>   
<NavLink to={{pathname:`/fifth/`}}className={isActive => "box1" + (!isActive ? " unselected" : "")}>
              

           <div className="box1">
            <div className="box2">            
              <h1>ABOUT</h1>          
            </div>               
      </div>  
      </NavLink>    
    </div>
  );
}
export default About;







