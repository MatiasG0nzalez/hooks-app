import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';


/* import { CounterWhitCustomHooks } from './components/01-useState/CounterWhitCustomHooks'; */
/* import { HooksApp } from './HooksApp'; */
import { SimpleForms } from './components/02-useEffect/SimpleForms';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 
  <SimpleForms/>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
