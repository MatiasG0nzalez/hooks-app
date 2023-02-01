import React, { useRef } from 'react'

export const FocusScreen = () => {
    const inputRef = useRef ();

    const handleClick = () => {
        inputRef.current.select()
    }

  return (
    <div>
        <hr/>
        <h1 className='alert alert-dark text-center text-black'>
            useRef Practica
        </h1>

        <input 
        ref={inputRef}
        type="text" name="" className='form-control' placeholder='Nombre...' id='input'/>

        <button type="button" className='btn btn-primary my-4 px-5' onClick={handleClick}>Focus</button>
    </div>
 )
}
