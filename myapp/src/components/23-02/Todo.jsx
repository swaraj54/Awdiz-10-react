import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState(["Eat lunch", "Do assignment"]);
  const [newTodo, setNewTodo] = useState("Hii");
  function handleChange(event) {
    setNewTodo(event.target.value);
    // console.log(event.target.value, "event.target.value");
  }
  function handleSubmit() {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  }
  return (
    <div>
      {/* <h1>{newTodo}</h1> */}
      <input type="text" value={newTodo} onChange={handleChange} />
      <button onClick={handleSubmit}>Add Todo</button>
      <h1>My Todos :-</h1>
      {todos.map((todo, i) => (
        <h5 key={todo}>
          {i + 1}. {todo}
        </h5>
      ))}
    </div>
  );
};

export default Todo;
