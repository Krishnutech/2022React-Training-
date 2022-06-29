import React from 'react'
import{BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Gallery from './Components/Gallery'; 
import Link from './Components/Link';
const First =() =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/ab" element={<About />}></Route>
            <Route path="/Gal" element={<Gallery />}></Route>
            <Route path="/Gal" element={<Link />}></Route>
            </Routes>
            </BrowserRouter>
    )
}
export default First