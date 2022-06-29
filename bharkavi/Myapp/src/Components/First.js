import {BrowserRouter,Routes,Route} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import ContactUs from "./ContactUs";
import Services from "./Services";
import Login from "./Login";
// import Login1 from "./Login1";
const First = () =>{ 
    return(
        <>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/Login" element={<Login />} />
        {/* <Route path="/Login1" element={<Login1 />} /> */}
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default First