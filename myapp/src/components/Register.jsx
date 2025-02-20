import { useNavigate } from "react-router-dom";

function Register() {
  const router = useNavigate();
  return (
    <div>
      <h1>Register</h1>
      <button onClick={() => router("/login")}>Login</button>
      <button onClick={() => router("/")}>Home</button>
    </div>
  );
}

export default Register;
