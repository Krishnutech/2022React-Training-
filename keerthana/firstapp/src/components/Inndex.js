import { BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Welcome from "./Welcome"
const Inndex = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path ="/" element={<Welcome />}></Route>
            <Route path ="testing" element={<About />}></Route>
        </Routes>
        </BrowserRouter>
    )
}
export default Inndex