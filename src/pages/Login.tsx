import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <h2 className='heading-color'>Login to your accounts</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Email</label>
            <input
              type="text"
              id="username"
              placeholder="Enter Email Address"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Log In</button>
        </form>
        <a href="/forgot-password">Forgot Password?</a>
      </div>
      <div className="login-image">
        <img src="/path-to-your-image.png" alt="Enterprise Resource Planning System" />
      </div>
    </div>
  );
};

export default Login;
