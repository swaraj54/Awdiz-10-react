import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyCounterContext } from "../../context/CounterContext";
import axios from "axios";
import toast from "react-hot-toast";

function Register() {
  const { state, dispatch } = useContext(MyCounterContext);
  console.log(state, "state in resgiter");
  const router = useNavigate();

  const [allUsers, setAllUsers] = useState([]);
  console.log(allUsers, "allUsers  ");

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
    try {
      if (
        userData.name &&
        userData.email &&
        userData.password &&
        userData.confirmPassword
      ) {
        if (userData.password === userData.confirmPassword) {
          const response = await axios.post(
            "http://localhost:8000/api/v1/auth/register",
            {
              userData,
            }
          );
          if (response.data.success === true) {
            toast.success(response.data.message);
            console.log(response.data, "response from register apu");
            setAllUsers([...allUsers, userData]);
            setUserData({
              name: "",
              email: "",
              password: "",
              confirmPassword: "",
            });
            router("/login");
          } else {
            toast.error(response.data.message);
          }
        } else {
          toast.error("Password not amtched.");
        }
      } else {
        toast.error("All fields are required.");
      }
    } catch (error) {
      console.log(error, "error while submitting register.");
      toast.error(error.response.data.message);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <button onClick={() => router("/login")}>Login</button>
      <button onClick={() => router("/")}>Home</button>

      <form onSubmit={handleSubmit}>
        <label>Name : </label>
        <br />
        <input
          type="text"
          value={userData.name}
          onChange={handleChange}
          name="name"
        />
        <br />
        <label>Email : </label>
        <br />
        <input
          type="email"
          value={userData.email}
          onChange={handleChange}
          name="email"
        />
        <br />
        <label>Password : </label>
        <br />
        <input
          type="password"
          value={userData.password}
          onChange={handleChange}
          name="password"
        />
        <br />
        <label>Confirm Password : </label>
        <br />
        <input
          type="password"
          value={userData.confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
        />
        <br />
        <input type="submit" />
        <br />
      </form>

      <h1>All Users</h1>
      {/* {user.email } */}
      {allUsers.map((user, i) => (
        <div>
          <h1>{i + 1}</h1>
          <h1>Name : {user.name}</h1>
          <h3>Email : {user.email}</h3>
        </div>
      ))}
    </div>
  );
}

export default Register;
