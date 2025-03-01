import React, { useCallback, useState } from "react";
import Todos from "./Todos";

const UseCallback = () => {
  const [counter, setCounter] = useState(0);

  const [todos, setTodos] = useState([]);
  //   const addTodo = () => {
  //     setTodos([...todos, "Eat lunch."]);
  //   };

  const addTodo = useCallback(() => {
    setTodos([...todos, "Eat lunch."]);
  }, [todos]);
  return (
    <div>
      <Todos todos={todos} addTodo={addTodo} />
      <h1>Coutner : {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
};

export default UseCallback;
