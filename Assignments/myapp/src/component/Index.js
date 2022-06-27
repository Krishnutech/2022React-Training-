import React from 'react';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const Index =() => {
  return(
      <Router>
          <div>
              <h1>React Router</h1>
              <Routes>
                  <Route path="/Home" element={<Home/>}></Route>
                  <Route path="/About" element={<About/>}></Route>
                  <Route path="/Contact" element={<Contact/>}></Route>
              </Routes>
          </div>
      </Router>
  )
}
export default Index;