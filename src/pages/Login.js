import { useState } from "react";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="card">
      <div className="form">
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className="form-input">
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email"
            required
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
            required
          />
          {error && <span className="error">{error}</span>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
