import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Components/Home';
import About from './Components/About';
import Gallery from './Components/Gallery';
import First from "./Components/First";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <>
  
   <Home name="React" />
   <About />
   <Gallery />
   <First />
   </>);