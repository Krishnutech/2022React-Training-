import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';
//  import Home from './components/Home';
//   import About from './components/About';
 import First from './components/First';
//  import Second from './components/Second';
 const root = ReactDom.createRoot(document.getElementById('root'));
 root.render(
    <> 
    {/* <Home />
    <About/> */}
    <First/>
    {/* <Second/> */}
    </>

 );