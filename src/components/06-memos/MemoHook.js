import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter'


export const MemoHook = () => {

    const [show, setShow] = useState(true)
   const {counter, increment } =  useCounter(100);

   const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])
 
  return (

    <div>
        <hr/>


        <h1 className='alert alert-dark text-center text-black'>MemoHook</h1>

        <h2>Counter : <small>{counter}</small></h2>
        <p>{memoProcesoPesado}</p>

        <button onClick={increment} className="btn btn-primary px-5 my-1"> Increment </button>


        <button onClick={() => setShow(!show)} 
        className="btn btn-primary px-5 m-1"> Show/Hide {JSON.stringify(show)} </button>
    </div>
  )
}
