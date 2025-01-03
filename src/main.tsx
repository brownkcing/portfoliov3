import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './utils/fadeInOnScroll';
import './utils/scrollToSection'; 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);