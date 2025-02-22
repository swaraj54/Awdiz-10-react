import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UseParams() {
  const router = useNavigate();
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6]);
  console.log(numbers, "numbers");

  return (
    <div>
      <h1>UseParams</h1>
      {numbers.map((number) => (
        <button onClick={() => router(`/paramsproduct/${number}`)}>
          {number}
        </button>
      ))}

      {/* <button onClick={() => router("/paramsproduct/1")}>Click 1</button>
      <button onClick={() => router("/paramsproduct/2")}>Click 2</button>
      <button onClick={() => router("/paramsproduct/3")}>Click 3</button>
      <button onClick={() => router("/paramsproduct/4")}>Click 4</button>
      <button onClick={() => router("/paramsproduct/5")}>Click 5</button>
      <button onClick={() => router("/paramsproduct/6")}>Click 6</button> */}
    </div>
  );
}
export default UseParams;
