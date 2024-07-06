import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ReactPixel from 'react-facebook-pixel';

const options = {
    autoConfig: true,
    debug: false,
};

ReactPixel.init('849990733843697', options);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
