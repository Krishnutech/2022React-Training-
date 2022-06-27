import './Learning.css'

import { NavLink } from "react-router-dom"


function Learning() {
  
  return (
    <div>

      <div className="fetch-data">
        
          <NavLink to={{ pathname: `/second/` }} className={isActive => "box1" + (!isActive ? " unselected" : "")}>

            <div className="post-data">
              <p>CARRIER</p>
            </div>

          </NavLink>
      
      </div>
    </div>
  );
}
export default Learning;