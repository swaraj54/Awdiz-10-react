import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "../../redux/counterSlice";

const ReduxCounter = () => {
  const counterValue = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  function Increment() {
    dispatch(increment());
  }
  function Decrement() {
    dispatch(decrement());
  }
  function Reset() {
    dispatch(reset());
  }
  return (
    <div>
      <h1>ReduxCounter : {counterValue}</h1>
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
};

export default ReduxCounter;
