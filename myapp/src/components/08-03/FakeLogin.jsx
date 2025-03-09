import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

const FakeLogin = () => {
  const router = useNavigate();
  const token = useSelector((state) => state.user.token);
  console.log(token, "token");
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(1);
  const [userData, setUserData] = useState({ username: "", password: "" });
  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!userData.username && !userData.password) {
        return alert("Please type username and password.");
      }
      const response = await axios.post("https://fakestoreapi.com/auth/login", {
        username: "john_doe",
        password: "pass123",
      });
      console.log(response, "response");
    } catch (error) {
      if (counter == 2) {
        alert("Login Successfull.");
        const token = "sdfghjkqawdag123456hgvfes";
        setCounter(1);
        dispatch(login(token));
        router("/all-products");
      } else {
        setCounter(counter + 1);
        alert(error?.response?.data);
        console.log(error.response.data, "error while makeing api request.");
      }
    }
  };

  useEffect(() => {
    if (token) {
      // alert(token);
      router(-1);
    }
  }, [token]);

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <p>Note : Please try username and password twice.</p>
        <label>Username</label>
        <br />
        <input onChange={handleChange} type="text" name="username" />
        <br />
        <label>Password</label>
        <br />
        <input onChange={handleChange} type="password" name="password" />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default FakeLogin;
