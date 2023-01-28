import React from "react";
import { useCounter } from "../../hooks/useCounter";

export const CounterWhitCustomHooks = () => {

  const { counter, increment, decrement, reset } = useCounter(200);
  

  return (
    <>

<hr />
      <h1 className="alert alert-dark text-center text-black">Counter with custom hook</h1>

      <div className="d-flex justify-content-center">
        
      <button className="btn btn-primary my-1 px-5" disabled>{counter}</button>
      </div>

      <div className="d-flex justify-content-center gap-2">
      <button className="btn btn-primary  px-5" onClick={increment}>+ 1</button>
      <button className="btn btn-primary  px-5" onClick={decrement}>- 1</button>
      <button className="btn btn-primary  px-5" onClick={reset}>Reset</button>
        
      </div>

    </>
  );
};
