import React, { memo } from 'react'

export const Small = memo(({value}) => {
    console.log("HOLA SOY SMALL");
  return (
    
    <small> {value} </small> )
})
