import React from "react";

const Props = ({ counter, setCounter }) => {
  //   console.log(props.counter, props.setCounter, "props");
  return (
    <button onClick={() => setCounter(counter + 1)}>Counter- {counter}</button>
  );
};

export default Props;
