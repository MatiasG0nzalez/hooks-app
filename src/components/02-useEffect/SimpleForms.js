import React, { useEffect, useState } from 'react'

export const SimpleForms = () => {
  
  const [formState, setFormState] = useState({
    name: '',
    email: ''
  })

  const {name, email} = formState;
  
  useEffect(() => {
    
  
    return () => {
      
    }

  }, [formState])

  useEffect(() => {
    
  
    return () => {
      
    }

  }, [name])

  useEffect(() => {
    
  
    return () => {
      
    }

  }, [email])
  
 
  const handleInputChange = ({target}) => {

    setFormState({
      ...formState,
      [target.name]:target.value
    });

  }
 
  return (
    <>
        <h1>
            useEffects
        </h1>

        <hr/>

        <div>

        

<div>
  <label htmlFor="UserEmail" className="block text-xs font-medium text-gray-700">
    Email
  </label>

  <input
    type="email"
  
    placeholder=" john@rhcp.com"
    className="mt-1 py-2 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
    name='name'
    value={email}
    autoComplete='off'
    onChange={handleInputChange}
  />
</div>
<div>
  <label htmlFor="UserName" className="block text-xs font-medium text-gray-700">
    Name
  </label>

  <input
    type="text"

    placeholder=" Ingresa tu nombre"
    className="mt-1 py-2 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
    name='email'
    value={name}
    autoComplete='off'
    onChange={handleInputChange}
  />
</div>


        </div>

    </>
  )
}
