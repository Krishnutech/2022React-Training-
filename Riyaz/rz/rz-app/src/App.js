
import './App.css';
import Home from './components/Home';
import{ BrowserRouter,Routes,Route} from "react-router-dom";
function App() {

  return (
    <>
     <div className="App">
      <h1>Riyaz</h1>
      <BrowserRouter>
      <Routes>  
          <Route path="/" element={<Home />} />
         </Routes>
         </BrowserRouter>
 
     </div>
     </>
  );
}

export default App;
