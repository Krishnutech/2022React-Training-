import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <React.Fragment>
    <BrowserRouter>
      <Routes>
    <div>
      <a>hai</a>
      <ul>
        <li><Link to = "/">Home</Link></li>
        <li><Link to = "/a">About</Link></li>
      </ul>
      
        <Route path='/' element={<Home />}></Route>
        <Route path='/a' element={<About />}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  </React.Fragment>
);
