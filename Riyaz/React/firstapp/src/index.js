import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Welcome from './component/Home';
import About from './component/About';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
<Welcome name="india" />
<About />
</>
);

