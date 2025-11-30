import React, { useState } from 'react';

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function submit(e) {
    e.preventDefault();
    setError('');
    if (!username.trim()) return setError('Enter username');
    if (!password.trim()) return setError('Enter password');
    // Demo auth: accept any non-empty creds
    onLogin(username.trim());
  }

  return (
    <div className="login-screen">
      <div className="login-left">
        <div className="seal">
          <img
            src="https://images.pexels.com/photos/19927023/pexels-photo-19927023.jpeg?cs=srgb&dl=pexels-ranjeet-chauhan-485922-19927023.jpg&fm=jpg"
            alt="taj"
          />
        </div>
      </div>

      <div className="login-right">
        <div className="login-card">
          <h2>Login</h2>
          <form onSubmit={submit}>
            <div className="form-field">
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter Username"
              />
            </div>
            <div className="form-field">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
              />
            </div>

            {error && <div className="small-red">{error}</div>}
            <button className="login-btn" type="submit">Login</button>
          </form>

          <div style={{ marginTop: 16 }}>
            <label style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <input type="checkbox" /> Remember me
            </label>
          </div>

          <div className="login-links">Forgot password? &nbsp; | &nbsp; Register</div>
        </div>
      </div>
    </div>
  );
}
