import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './context/Context';
import { FilterProvider } from './context/Filtercontext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <FilterProvider>
    <React.StrictMode>
    <App />

  </React.StrictMode>
  </FilterProvider>
  </AppProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
