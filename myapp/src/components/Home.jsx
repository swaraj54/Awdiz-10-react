import { useNavigate } from "react-router-dom";

function Home() {
  const router = useNavigate();
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => router("/login")}>Login</button>
      <button onClick={() => router("/register")}>Register</button>
    </div>
  );
}

export default Home;
