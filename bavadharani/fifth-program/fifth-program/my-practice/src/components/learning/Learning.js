import './Learning.css'
import React, { useState, useEffect } from 'react';

import { withRouter, NavLink} from "react-router-dom"
import Axios from 'axios'



function Learning() {
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    Axios
      .get("https://api.github.com/users")
      .then(res => {
        console.log(res)
        setPosts(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  },[])
/*useEffect(()=>{
console.log(posts)
},[posts])*/

useEffect(()=>{
    document.title="first"
  })


  return (
    <div>

      <div className="fetch-data">
        {posts.map(post => (
          <NavLink to={{pathname:`/second/${post.login}`}}className={isActive => "box1" + (!isActive ? " unselected" : "")}>
              
          <div className="post-data">
            <img src={post.avatar_url} className="avatar" />
            <p>{post.login}</p>
          </div>
          
          </NavLink>
       /*<Link to={'/Learning/${post.login}'}>
       <div className="post-data">
       <img src={post.avatar_url} className="avatar" />
       <p>{post.login}</p>
     </div>

     </Link>*/


        ))}
      </div>
    </div>
  );
}
export default Learning;