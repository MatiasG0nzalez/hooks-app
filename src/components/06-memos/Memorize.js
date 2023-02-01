import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small';

export const Memorize = () => {

    const [show, setShow] = useState(true)
   const {counter, increment } =  useCounter(10);

  return (

    <div>
        <hr/>


        <h1 className='alert alert-dark text-center text-black'>Memorize</h1>
        <h2>Counter : <Small value={counter}/> </h2>
        <button onClick={increment} className="btn btn-primary px-5 my-1"> Increment </button>
        <button onClick={() => setShow(!show)} 
        className="btn btn-primary px-5 m-1"> Show/Hide {JSON.stringify(show)} </button>
    </div>
  )
}
