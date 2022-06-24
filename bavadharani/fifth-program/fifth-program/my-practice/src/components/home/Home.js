


import { NavLink} from "react-router-dom"



function Home() {
 return (
   <div>   
<NavLink to={{pathname:`/fourth/`}}className={isActive => "box1" + (!isActive ? " unselected" : "")}>
              

           <div className="box1">
            <div className="box2">            
              <h1>third pagepage</h1>          
            </div>               
      </div>  
      </NavLink>    
    </div>
  );
}
export default Home;











