import {Routes,Route} from "react-router-dom";
import Home from "./Home";
import About from "./About"; 
import Contact from "./Contact";
import Service from "./Service";
import Error from "./Error";
import Login from "./Login";
const Overall =() => {

    return(
        
        <Routes>
           <Route exact path="/" element={<Home/>}></Route>
           <Route exact path="/about" element={<About/>}></Route>
           <Route exact path="/service" element={<Service/>}></Route>
           <Route exact path="/contact" element={<Contact/>}></Route>
           <Route exact path="/login" element={<Login/>}></Route>
           <Route exact path="/*" element={<Error/>}></Route>
           
        </Routes>
        
    )
}
export default Overall