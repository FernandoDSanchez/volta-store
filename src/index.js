import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import{ App }from './App';
import {Helmet} from "react-helmet";

const siteLanguage = 'es-ES';


ReactDOM.render(
  <React.StrictMode>
    <Helmet htmlAttributes={{
        lang: siteLanguage,
        }} 
      ><title lang={siteLanguage}>Volta Box</title>
    </ Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

