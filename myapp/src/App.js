import "./App.css";
import UseEffect from "./components/22-02/UseEffect";
import UseState from "./components/22-02/UseState";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/28-02/Register";
import { Routes, Route } from "react-router-dom";
import UseParams from "./components/22-02/UseParams";
import ParamsProduct from "./components/22-02/ParamsProduct";
import Props from "./components/23-02/Props";
import { useState } from "react";
import Todo from "./components/23-02/Todo";

function App() {
  const [counter, setCounter] = useState(111);

  // console.log("Inside app");
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/usestate" element={<UseState />} />
        <Route path="/useeffect" element={<UseEffect />} />
        <Route path="/useparams" element={<UseParams />} />
        <Route path="/paramsproduct/:uniqueid" element={<ParamsProduct />} />
        <Route
          path="/props"
          element={<Props counter={counter} setCounter={setCounter} />}
        />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
