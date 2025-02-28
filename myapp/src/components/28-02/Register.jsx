import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const router = useNavigate();

  const [allUsers, setAllUsers] = useState([
    {
      name: "awdiz",
      email: "awdiz@gmail.com",
      password: "Pass@123",
      confirmPassword: "Pass@123",
    },
  ]);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  console.log(userData, "userData");

  const handleChange = (event) => {
    // console.log(event.target.value, "value", event.target.name, "name");
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // write your code here
    // try {
    //   const response = await axios.post("https://backend.com/register", {
    //     userData,
    //   });
    //   console.log(response, "response");
    // } catch (error) {
    //   console.log(error, "error while submitting register.");
    // }
  };

  return (
    <div>
      <h1>Register</h1>
      <button onClick={() => router("/login")}>Login</button>
      <button onClick={() => router("/")}>Home</button>

      <form onSubmit={handleSubmit}>
        <label>Name : </label>
        <br />
        <input type="text" onChange={handleChange} name="name" />
        <br />
        <label>Email : </label>
        <br />
        <input type="email" onChange={handleChange} name="email" />
        <br />
        <label>Password : </label>
        <br />
        <input type="password" onChange={handleChange} name="password" />
        <br />
        <label>Confirm Password : </label>
        <br />
        <input type="password" onChange={handleChange} name="confirmPassword" />
        <br />
        <input type="submit" />
        <br />
      </form>

      <h1>All Users</h1>
      {/* {user.email } */}
    </div>
  );
}

export default Register;
