import React, { memo } from 'react'

export const ShowIncrement = memo(({increment}) => {

    console.log("me ejecute ");
  return (
    <button
    className='btn btn-primary px-5 m-1'
    onClick={() => {
        increment(5);
    }}>

        Increment 

    </button>
  )
})
