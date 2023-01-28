import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

export const MultipleCustomHooks = () => {

  const {counter, increment } = useCounter(1);

  const { loading, data } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );

  const { image, name } = !!data && data;


  return (
    <div>
      <hr />
      <h1 className="alert alert-dark text-black text-center">
        Multiple Custom Hooks
      </h1>
      <h1 className="bg-dark rounded text-white text-center fs-2">
        Rick and Morty characters
      </h1>

      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="py-2">{image}</p>
          <footer className="blockquote-footer">{name}</footer>
        </blockquote>
      )}

      <div className="d-flex justify-content-end">
        <button type="btn" className="btn btn-primary" onClick={increment}>
          Next character
        </button>
      </div>
    </div>
  );
};
