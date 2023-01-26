import React, {  useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm";


export const FormWhitCustomHook = ( initialState = {}) => {


  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: ""
  });

  const { name, email, password } = formValues;

  useEffect(() => {
    console.log("Email cambio")
  
    return () => {
      
    }
  }, [email])

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formValues);
  }
  

  return (
    <>
      <h1>FormWhitCustomHook</h1>

      <hr />

      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder=" Ingresa un nombre"
            name="name"
            value={name}
            autoComplete="off"
            onChange={handleInputChange}
          />

          <input
            type="text"
            placeholder=" Ingresa un email"
            name="email"
            value={email}
            autoComplete="off"
            onChange={handleInputChange}
          />

<input
            type="password"
            placeholder=" Ingresa una contraseña"
            name="password"
            value={password}
            onChange={handleInputChange}
          />

          <button type="submit" >Guardar</button>
        </form>
      </div>

   
    </>
  );
};
