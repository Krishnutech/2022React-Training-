
import React, { useState, useEffect } from 'react';


function Content() {

  const [toggle,setToggle]=useState(true);
  const [items,setItems] = useState([
    { boxhead: "Package 01", boxpara: "Lorem Ipsum industry type setting has  has been has been the  text dummy text text of ever since" },
    { boxhead: "Package 02", boxpara: " Lorem Ipsum industry type setting has  has been has been the  text dummy text text of ever since   " },
    { boxhead: "Package 03", boxpara: "  has been has been the  text dummy text text of ever since   Lorem Ipsum industry type setting has " }
  ]);

const OnSetItems=()=>{
  if(toggle == true){
    setItems(items.reverse());
    setToggle(false);
  }
  else if(toggle == false){
    setItems(items.reverse());
    setToggle(true);
  }
  
}
  return (
    <div>
 <div className="btn-style">
                  <button   onClick={OnSetItems}  className="button-color" >GET STARTED</button>  
            </div>
      <div className=" container box-content">
        <div className="box-content1">
          {items.map((items) => (
            <div className="box-head">
              <h2>{items.boxhead}</h2>
              <div className="border-name"></div>
              <p >{items.boxpara}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}

export default Content;



