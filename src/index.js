// import hooks and libs
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
// import components
import App from './App';
import reportWebVitals from './reportWebVitals';
// import css
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
        <App />
    // </React.StrictMode>
);

reportWebVitals();
