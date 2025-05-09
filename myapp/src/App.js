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
import { useContext, useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { login } from "./redux/userSlice";
import SingleProduct from "./components/09-03/SingleProduct";
import Navbar from "./components/09-03/Navbar";
import toast from "react-hot-toast";
import axios from "axios";
import AddProduct from "./components/seller/AddProduct";
import AddedProducts from "./components/AddedProducts";
import AllProductsFromDb from "./components/AllProductsFromDb";
import SingleProductFromDb from "./components/SingleProductFromDb";
import Cart from "./components/Cart";
import OrderHistory from "./components/OrderHistory";
import axiosInstance from "./axiosConfig";
import { io } from "socket.io-client";
const socket = io("http://localhost:8000");
// const socket = io("https://awdiz-10-backend.onrender.com");

function App() {
  const dispatch = useDispatch();
  const tokenFromRedux = useSelector((state) => state.user.token);
  const [counter, setCounter] = useState(111);
  const userData = useSelector((state) => state.user.user);
  // const { state, dispatch } = useContext(MyCounterContext);
  // console.log(state, "state in app from context");

  // console.log("Inside app");

  // useEffect(() => {
  //   const tokenFromLocalStorage = JSON.parse(localStorage.getItem("token"));
  //   if (tokenFromLocalStorage) {
  //     if (tokenFromRedux == null) {
  //       dispatch(login(tokenFromLocalStorage));
  //     }
  //   }
  // }, []);

  async function getCurrentUserData(token) {
    // make api call with token
    try {
      // const response = await axios.post(
      //   "http://localhost:8000/api/v1/auth/get-current-user",
      //   { token },
      //   { withCredentials: true }
      // );
      const response = await axiosInstance.post("/auth/get-current-user", {
        token,
      });
      if (response.data.success) {
        dispatch(login(response.data.userData));
      } else {
        localStorage.removeItem("token");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (!userData) {
      const token = localStorage.getItem("token");
      console.log(token, "token");
      if (token) {
        console.log("user logged in but lost data");
        getCurrentUserData(JSON.parse(token));
      } else {
        console.log("user not logged in");
      }
    }
  }, [userData]);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log(data, " data from receive_message");
    });
  }, []);

  useEffect(() => {
    console.log(
      userData,
      userData?.userId,
      userData?.role == "seller",
      "check here"
    );
    if (userData && userData?.userId && userData?.role == "seller") {
      socket.emit("registerSeller", { userId: userData?.userId });
    }
    socket.on("productBuy", ({ buyerName, productData }) => {
      toast.success(
        `Your product ${productData?.name} was brought by ${buyerName}.`
      );
    });
    // return () => socket.disconnect();
  }, [userData]);

  const sendMessage = () => {
    socket.emit("send_message", { message: "Hello from frontend" });
  };

  return (
    <div className="App">
      <button onClick={sendMessage}>Socket testing button</button>
      <Navbar />
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
        <Route path="/all-products-fakestore" element={<AllProducts />} />
        <Route
          path="/single-product-fakestore/:id"
          element={<SingleProduct />}
        />
        <Route path="/fake-login" element={<FakeLogin />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/added-products" element={<AddedProducts />} />
        <Route path="/all-products" element={<AllProductsFromDb />} />
        <Route path="/single-product/:id" element={<SingleProductFromDb />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order-history" element={<OrderHistory />} />
        {/* <Route path="/view-products" element={<ViewProducts />} /> */}
      </Routes>
    </div>
  );
}

export default App;

// useContext CONTEXT

// redux
