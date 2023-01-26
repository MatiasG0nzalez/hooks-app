import React, { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForms = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  useEffect(() => {
    console.log("Hola mundo");

    return () => {};
  }, []);

  
  

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };



  return (
    <>
      <h1>useEffects</h1>

      <hr />

      <div>
        <div>
          <input
            type="text"
            placeholder=" Ingresa un nombre"
            className="mt-1 py-2 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
            name="name"
            value={name}
            autoComplete="off"
            onChange={handleInputChange}
          />

          <input
            type="text"
            placeholder=" Ingresa un email"
            className="mt-1 py-2 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
            name="email"
            value={email}
            autoComplete="off"
            onChange={handleInputChange}
          />
        </div>
      </div>

      {(name === 'Mati') && <Message/>} 
    </>
  );
};
