import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10)


    const increment  = useCallback(
      (num) => {
        setCounter(counter => counter + num)
      },
      [ setCounter ],
    )
    

  return (
    <div>
        <hr/>
        <h1 className='alert alert-dark text-center text-black' >useCallback Hook
        </h1>

        <p>Counter {counter}</p>
        
        <ShowIncrement increment={increment}/>

    </div>
  )
}
