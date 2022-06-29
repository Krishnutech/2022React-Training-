import React from "react";
import Menubar from "./Menubar";
import Footer from "./Footer";
import "./Footer.css"
import "./Services.css"
const Services= () =>{
    return(
        <div>
            <Menubar />
            <div className="service">
             <img src="https://blog.econocom.com/wp-content/uploads/2017/01/retail-web-to-store_une.jpg" alt="" />
             <h1>SERVICES</h1>
             <p>The best grocery delivery services offer everything that you can get at the store, but with the convenience of being dropped off at your home. 

               Two of the biggest and most widely available grocery delivery services are Amazon Fresh and Instacart. They operate differently (Amazon Fresh puts together orders in a warehouse, while Instacart uses personal shoppers who go to local stores near you), but both offer a range of goods, from fresh produce to meat and seafood to non-perishables like pasta to cleaning supplies. 

               The other options that round out the list of best grocery delivery services have more limitations, whether it’s availability in many locations or the breadth of products they sell. None are exactly cheap when it comes to delivery fees, but convenience and quality come at a premium. </p>
             <Footer />
            </div>
        </div>
    )
}
export default Services