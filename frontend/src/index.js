import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/index.css';  // ✅ 이 줄이 꼭 필요함!




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);