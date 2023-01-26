import React, { useState } from 'react'

export const CounterApp = () => {


  const [ counters, setCounters] = useState({
        counter1: 10,
        counter2: 20
    });
    
    const {counter1 , counter2} = counters
   
    return (

    

    <>
        <h1> Counter  1: { counter1 }</h1>
        <hr/>

        <h1> Counter  2: { counter2 }</h1>
        <hr/>

        <button className=' bg-indigo-500 text-white py-2 px-6 rounded-md hover:bg-indigo-600 active:bg-indigo-700 '
        onClick={ 
        () => setCounters(
            {
                ...counters,
                counter1: counter1+1,
                

            }
        )
        }
        >
            +1
        </button>

        


    </>
  )
}
