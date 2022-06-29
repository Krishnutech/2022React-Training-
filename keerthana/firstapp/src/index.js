import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter} from 'react-router-dom';
// import Welcome from './components/Welcome';
// import Header from './components/Header';
// import Index from './components/Index';
// import Menubar from './Pages/Menubar';
import Overall from './Pages/Overall';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
 <React.Fragment > 
        {/*<Header />
        <Welcome topic = "Keerthana" /> 
        <Index />  */}
        <BrowserRouter> 
        <Overall />
        </BrowserRouter>
        </React.Fragment>
);