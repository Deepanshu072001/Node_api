import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../services/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(email, password);
      localStorage.setItem("token", response.data.accessToken);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="form-container">
  <h2>Login</h2>
  {error && <p className="error-message">{error}</p>}
  <form onSubmit={handleSubmit}>
    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
    <button type="submit">Login</button>
  </form>
  <p style={{ textAlign: "center", marginTop: "10px" }}>
    Don't have an account? <Link to="/register">Register</Link>
  </p>
</div>

  );
};

export default Login;
