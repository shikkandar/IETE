import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Navbar from './component/nav';
import reportWebVitals from './reportWebVitals';
import { Foot } from './component/footer/Foot';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
        <App />
    <Foot/>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
