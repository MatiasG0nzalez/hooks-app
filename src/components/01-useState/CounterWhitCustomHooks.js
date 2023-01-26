import React from "react";
import { useCounter } from "../../hooks/useCounter";

export const CounterWhitCustomHooks = () => {
  const { state, increment, decrement, reset } = useCounter(200);
  return (
    <div>
      <h1>Counter with custom hook {state}</h1>

      <button onClick={() => increment()}>+ 1</button>
      <button onClick={() => decrement()}>- 1</button>

      <button onClick={reset}>Reset</button>
    </div>
  );
};
