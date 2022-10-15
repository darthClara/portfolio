import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.scss";
import "./cielo.jpg";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="indexWrapper">
    <App />
    </div>
  </React.StrictMode>
);

