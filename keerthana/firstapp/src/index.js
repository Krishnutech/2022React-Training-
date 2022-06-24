import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  {BrowserRouter as Router,Switch,Route,Link}from "react-router-dom";
import Welcome from './components/Welcome';
import Header from './components/Header';
import Footer from './components/Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
	<div>
    <Header />
    <Welcome topic = "Keerthana" />
    <Footer />

    </div>
);