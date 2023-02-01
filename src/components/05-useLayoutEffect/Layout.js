import React, { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

export const Layout = () => {

  const {counter, increment } = useCounter(1);

  const { data } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );

  const { image } = !!data && data;

  const pTag = useRef()

  const [boxSize, setBoxSize] = useState({})

    useLayoutEffect(() => {

      
      setBoxSize( pTag.current.getBoundingClientRect())
    
      return () => {
        
      };
    }, [image])

  return (
    <div>
      <hr />
      <h1 className="alert alert-dark text-black text-center">
        Layout Effect
      </h1>
      <h1 className="bg-dark rounded text-white text-center fs-2">
        Rick and Morty characters
      </h1>

      
        <blockquote className="blockquote text-end">
          <p ref={pTag} className="py-2">{image}</p>
          <pre>{JSON.stringify(boxSize , null, 3)}</pre>
        </blockquote>
      

      <div className="d-flex justify-content-end">
        <button type="btn" className="btn btn-primary" onClick={increment}>
          Next character
        </button>
      </div>
    </div>
  );
};
