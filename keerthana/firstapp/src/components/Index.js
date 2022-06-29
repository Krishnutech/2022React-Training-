import { BrowserRouter,Routes,Route } from "react-router-dom";
import About from "./About"; 
import Home from "./Home";
import Dashboard from "./Dashboard";
import Contact from "./Contact";
import Error from "./Error";
const Index =() => {

    return(
        <BrowserRouter>
        <Routes>
            <Route  exact path ="/" element={<Home/>} />
            <Route path ="about" element={<About />} />
            <Route path ="/dashboard" element={<Dashboard />} />
            <Route path ="/c" element={<Contact/>} />
            <Route path ="/*" element={<Error />} />
        </Routes>
        </BrowserRouter>
    )
}
export default Index