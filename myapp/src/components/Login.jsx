import { useNavigate } from "react-router-dom";

function Login() {
  const router = useNavigate();
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => router("/register")}>Register</button>
      <button onClick={() => router("/")}>Home</button>
    </div>
  );
}

export default Login;
