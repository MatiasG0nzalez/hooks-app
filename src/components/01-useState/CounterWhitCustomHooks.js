import React from "react";
import { useCounter } from "../../hooks/useCounter";

export const CounterWhitCustomHooks = () => {
  const { state, increment, decrement, reset } = useCounter(200);
  return (
    <div>
      <h1>Counter with custom hook {state}</h1>

      <button
        onClick={() => increment()}
        className="px-7 mr-2 bg-blue-500 rounded text-white py-1"
      >
        {" "}
        + 1{" "}
      </button>
      <button
        onClick={() =>decrement()}
        className="px-7 bg-blue-500 rounded text-white py-1"
      >
        {" "}
        - 1{" "}
      </button>

      <button
        onClick={reset}
        className="px-7 bg-blue-500 rounded text-white py-1"
      >
        {" "}
        Reset{" "}
      </button>
    </div>
  );
};
