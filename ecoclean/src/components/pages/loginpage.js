import React, { useState } from 'react';
import "../styles/login.css"; // Make sure to have a CSS file for styling

const LoginPage = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <div className="login-container">
      <div className="dropdown">
        <button className="dropbtn" onClick={toggleLoginForm}>
          Login
        </button>
        {showLoginForm && (
          <div className="dropdown-content">
            <form onSubmit={handleLogin}>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" required />
              <br />
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" required />
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
