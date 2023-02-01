import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';


/* import { CounterWhitCustomHooks } from './components/01-useState/CounterWhitCustomHooks'; */
/* import { HooksApp } from './HooksApp'; */
/* import { SimpleForms } from './components/02-useEffect/SimpleForms'; */
/* import { FormWhitCustomHook } from './components/02-useEffect/FormWhitCustomHook';
import { CounterWhitCustomHooks } from './components/01-useState/CounterWhitCustomHooks';
import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
import { FocusScreen } from './components/04-useRef/FocusScreen';
import { RealExampleRef } from './components/04-useRef/RealExampleRef';
import { Layout } from './components/05-useLayoutEffect/Layout';
import { Memorize } from './components/06-memos/Memorize';
import { MemoHook } from './components/06-memos/MemoHook';
import { CallbackHook } from './components/06-memos/CallbackHook';
 */import { Padre } from './components/07-tarea-memo/Padre';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <h1>Practica Hooks</h1>
    {/* <CounterWhitCustomHooks/>
  <FormWhitCustomHook/>
  <MultipleCustomHooks/>
  <FocusScreen/>
  <RealExampleRef/>
  <Layout/>
  <Memorize/>
  <MemoHook/>
  <CallbackHook/> */}
  <Padre/>
  </div>
  
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
