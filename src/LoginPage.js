import React, { useState } from 'react';
import './LoginPage.css'; // Import your CSS file

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('user');

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('User Type:', userType);
    // Here you can add your login logic
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>
            <input
              type="radio"
              value="user"
              checked={userType === 'user'}
              onChange={() => setUserType('user')}
            />
            User
          </label>
          <label>
            <input
              type="radio"
              value="finance"
              checked={userType === 'finance'}
              onChange={() => setUserType('finance')}
            />
            Finance Institute
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
      {userType === 'user' && (
        <p>Not registered yet? <a href="/registration">Register here</a></p>
      )}
    </div>
  );
}

export default LoginPage;
