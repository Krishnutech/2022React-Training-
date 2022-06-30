import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contactus from './components/Contactus';
// import Counter from './reducer/Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home />}></Route>
  <Route path="/a" element={<About />}></Route>
  <Route path="/s" element={<Services />}></Route>
  <Route path="/c" element={<Contactus />}></Route>

  </Routes>
  </BrowserRouter>
  {/* <Counter /> */}
  </>
);


