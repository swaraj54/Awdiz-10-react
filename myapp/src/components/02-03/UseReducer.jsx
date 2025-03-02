import React, { useReducer } from "react";

function Reducer(state, action) {
  // return kardo updated state ko
  console.log(state, "state", action, "action");
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT_COUNTER":
      return { ...state, counter: state.counter - 1 };
    case "RESET_COUNTER":
      return { ...state, counter: 1 };
    default:
      return state;
  }
}
const initialState = { counter: 1, coutner2: 122 };

const UseReducer = () => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  console.log(state, "state");
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

export default UseReducer;
