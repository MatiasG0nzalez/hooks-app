import React, {  useEffect } from "react";
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

<hr />
      <h1 className="alert alert-dark text-black text-center my-2">Form whit custom hook</h1>

     

      <div>
        <form onSubmit={handleSubmit} className="form-group">
          <input
          className="form-control my-2"
            type="text"
            placeholder=" Ingresa un nombre"
            name="name"
            value={name}
            autoComplete="off"
            onChange={handleInputChange}
          />

          <input
          className="form-control my-2"
            type="text"
            placeholder=" Ingresa un email"
            name="email"
            value={email}
            autoComplete="off"
            onChange={handleInputChange}
          />

<input
className="form-control my-2"
            type="password"
            placeholder=" Ingresa una contraseña"
            name="password"
            value={password}
            onChange={handleInputChange}
          />

          <button type="submit" className="btn btn-success my-2 px-5" >Guardar</button>
        </form>
      </div>

   
    </>
  );
};
