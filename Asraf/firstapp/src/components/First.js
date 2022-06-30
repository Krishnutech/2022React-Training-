import{BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Second from "./Second";
<h1>first</h1>
const First =() =>
{
return(
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/a" element={<About/>} />
      <Route path="/s" element={<Second/>} />
    </Routes>
    </BrowserRouter>
)
}
export default First