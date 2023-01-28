import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';


/* import { CounterWhitCustomHooks } from './components/01-useState/CounterWhitCustomHooks'; */
/* import { HooksApp } from './HooksApp'; */
/* import { SimpleForms } from './components/02-useEffect/SimpleForms'; */
import { FormWhitCustomHook } from './components/02-useEffect/FormWhitCustomHook';
import { CounterWhitCustomHooks } from './components/01-useState/CounterWhitCustomHooks';
import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <h1>Practica Hooks</h1>
    <CounterWhitCustomHooks/>
  <FormWhitCustomHook/>
  <MultipleCustomHooks/>
  </div>
  
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
