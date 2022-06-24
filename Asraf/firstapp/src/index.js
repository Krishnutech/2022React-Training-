import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';
 import Welcome from './components/Home';
 import About from './components/About';

 const root = ReactDom.createRoot(document.getElementById('root'));
 root.render(
    <>
    <Welcome language="training" />
    <About/>
    </>
    

 );