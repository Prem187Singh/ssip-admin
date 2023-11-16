import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import "./global.css";
=======
<<<<<<< Updated upstream

=======
import "./global.css";
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from './context/store';
>>>>>>> Stashed changes
>>>>>>> fb2e4f86f780c6772351ec937529503f642c150f
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <App />
      </StoreProvider>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
