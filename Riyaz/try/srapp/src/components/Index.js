import { BrowserRouter,Routes,Route } from "react-router-dom";
import Pages from "./Pages";
import About from "./About";
import Home from "./Navbar";
import Footer from "./Footer";
const Index =() =>{
    return(
<BrowserRouter>
<Routes>
    <Route path="/p" element={<Pages />} />
    <Route path="/" element={<Home name="india" />} />
    <Route path="/a" element={<About />} />
    <Route path="/f" element={<Footer />} />
 
</Routes>
</BrowserRouter>
    )
}
export default Index