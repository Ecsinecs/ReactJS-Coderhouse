import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> Si se descomenta, ItemListContaner.js corre 2 veces.
    <App />
  // </React.StrictMode>
);
