import React, { useContext } from "react";
import { MyCounterContext } from "../../context/CounterContext";

const ContextCounter = () => {
  const { state, dispatch } = useContext(MyCounterContext);

  function Increment() {
    dispatch({ type: "INCREMENT_COUNTER" });
  }
  function Decrement() {
    dispatch({ type: "DECREMENT_COUNTER" });
  }
  function Reset() {
    dispatch({ type: "RESET_COUNTER" });
  }

  return (
    <div>
      <h1>Counter : {state.counter}</h1>
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
};

export default ContextCounter;
