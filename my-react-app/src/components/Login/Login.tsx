import React, { useState } from "react";
import "./Login.css";
import backgroundImage from "./assets/Login-bg.jpg"; // Replace with your actual background image path

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="login-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="login-form">
        <h2>Merci d'entrer les informations de connexion</h2>
        <form>
          <div className="input-container">
            <label>Email</label>
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-container">
            <label>Mot de passe</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Mot de passe"
                required
              />
              <span
                className="password-toggle"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}{" "}
                {/* Icons can be replaced with actual icons */}
              </span>
            </div>
          </div>
          <button type="submit" className="login-btn">
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
