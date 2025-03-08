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
import { useContext, useState } from "react";
import Todo from "./components/23-02/Todo";
import UseMemo from "./components/01-03/UseMemo";
import UseCallback from "./components/01-03/UseCallback";
import UseRef from "./components/02-03/UseRef";
import UseReducer from "./components/02-03/UseReducer";
import { MyCounterContext } from "./context/CounterContext";
import ContextCounter from "./components/04-03/ContextCounter";
import ReduxCounter from "./components/06-03/ReduxCounter";
import FakeLogin from "./components/08-03/FakeLogin";
import AllProducts from "./components/08-03/AllProducts";

function App() {
  const [counter, setCounter] = useState(111);
  // const { state, dispatch } = useContext(MyCounterContext);
  // console.log(state, "state in app from context");

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
        <Route path="/use-memo" element={<UseMemo />} />
        <Route path="/use-callback" element={<UseCallback />} />
        <Route path="/use-ref" element={<UseRef />} />
        <Route path="/use-reducer" element={<UseReducer />} />
        <Route path="/context-counter" element={<ContextCounter />} />
        <Route path="/redux-counter" element={<ReduxCounter />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/fake-login" element={<FakeLogin />} />
      </Routes>
    </div>
  );
}

export default App;

// useContext CONTEXT

// redux
