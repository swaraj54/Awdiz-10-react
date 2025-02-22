import "./App.css";
import UseEffect from "./components/22-02/UseEffect";
import UseState from "./components/22-02/UseState";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { Routes, Route } from "react-router-dom";
import UseParams from "./components/22-02/UseParams";
import ParamsProduct from "./components/22-02/ParamsProduct";

function App() {
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
      </Routes>
    </div>
  );
}

export default App;
