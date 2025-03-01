import React, { memo } from "react";

const Todos = ({ todos, addTodo }) => {
  console.log("Inside todos even todos props is not changed.");
  return (
    <div>
      {todos.map((todo, i) => (
        <h1>
          {i + 1}.{todo}
        </h1>
      ))}
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default memo(Todos); // [] ['Eat lucnh']

// todos []  => []
// addTodo  => its new cause its recreated addTodo
