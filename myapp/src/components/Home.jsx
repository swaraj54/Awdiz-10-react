import { useNavigate } from "react-router-dom";

function Home() {
  const router = useNavigate();
  const redirection = (route) => {
    router(route);
  };
  return (
    <div>
      <h1>Home</h1>
      <button
        onClick={() => {
          redirection("/login");
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          redirection("/register");
        }}
      >
        Register
      </button>
    </div>
  );
}

export default Home;
