import "../components/css/login.css";
import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import { loginUser } from "../../data/api";
import { UserLogin } from "../../models/login";

const Login: React.FC = () => {
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userLogin: UserLogin = {
        email: userEmail,
        password: userPassword,
      };
      await loginUser(userLogin);
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <CustomInput
          label="Email:"
          type="email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          required
        />
        <CustomInput
          label="Password:"
          type="password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          required
        />
        {error && <div className="error-message">{error}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
