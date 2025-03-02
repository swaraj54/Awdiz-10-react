import React, { useRef, useState } from "react";

const UseRef = () => {
  const counter = useRef(0);
  const [stateCounter, setStateCounter] = useState(100);
  console.log(counter, "counter");
  function increment() {
    counter.current = counter.current + 1;
    alert(counter.current);
  }
  return (
    <div>
      <h1>Coutner : {counter.current}</h1>
      <button onClick={increment}>+</button>
      <h1>State Counter : {stateCounter}</h1>
      <button onClick={() => setStateCounter(stateCounter + 1)}>+</button>
    </div>
  );
};

export default UseRef;
