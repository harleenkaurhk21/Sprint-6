import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/checkout");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Login</h1>

        <p>
          You need to login before accessing the checkout page.
        </p>

        <button
          className="login-btn"
          onClick={handleLogin}
        >
          Login as Guest
        </button>
      </div>
    </div>
  );
}

export default Login;