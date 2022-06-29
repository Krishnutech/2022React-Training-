import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
// import Index from './components/Index';

import About from "./components/About";
import Service from "./components/Service";
import Home from './components/Home';
import Contact from './components/Contact';
import Signup from './components/Signup'
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.Fragment>
<BrowserRouter>
<Routes>
  
    <Route path="/" element={<Home />} />
    <Route path="/service" element={<Service />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/signup" element={<Signup />} />

 
</Routes>
</BrowserRouter>
{/* <Index /> */}
</React.Fragment>
);

