import { useEffect, useState } from "react";

function UseEffect() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(10000);

  useEffect(() => {
    console.log("Inside useeffect.");
  }, [counter, counter2]);

  return (
    <>
      <h1>Counter {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <h1>Counter 2 {counter2}</h1>
      <button onClick={() => setCounter2(counter2 + 1)}>+ for counter 2</button>
    </>
  );
}
export default UseEffect;
