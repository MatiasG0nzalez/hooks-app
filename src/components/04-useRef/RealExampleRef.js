import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'

export const RealExampleRef = () => {

    const [show, setShow] = useState(false)
  return (
    <div>
        <hr/>
        <h1 className='alert alert-dark text-center text-black'>
            useRef Ejemplo Real
        </h1>

       { show && <MultipleCustomHooks/> }

        <button type="button" className='btn btn-primary my-4 px-5'
        onClick={() => setShow(!show)}>Show/Hide</button>
         
    </div>
  )
}
