import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './pages/about';
import 'bootstrap/dist/css/bootstrap.css';  // added by ska for Custom Nav bar was not working without CSS 26/09/2023


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //ska need to check what is strick mode. 
  <React.StrictMode>
     <App/>       
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
