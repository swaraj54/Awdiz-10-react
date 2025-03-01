import React, { useEffect, useMemo, useRef, useState } from "react";

const UseMemo = () => {
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(1);
  // const heavyCalculations = functionforheavyCalculations(counter);
  const heavyCalculations = useMemo(
    () => functionforheavyCalculations(counter),
    [counter]
  );

  return (
    <div>
      <div>
        {todos.map((todo, i) => (
          <h1>
            {i + 1}.{todo}
          </h1>
        ))}
      </div>
      <button onClick={() => setTodos([...todos, "Eat lunch"])}>
        Add todo
      </button>
      <h1>heavyCalculations : {heavyCalculations}</h1>
      <h1>Counter : {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
};

function functionforheavyCalculations(counter) {
  console.log(counter, "counter");

  for (var i = 0; i < 1000000000; i++) {
    counter++;
  }
  console.log(counter, "counter");
  return counter; /// 100000008
}

export default UseMemo;
