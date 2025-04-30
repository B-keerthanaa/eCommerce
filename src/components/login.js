import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

  const h1Style = {
    fontSize: '2.5em',
    marginBottom: '30px',
    color: '#18bc9c'
  };
  const [valueinput, setValueinput] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');

  const loginvalue = (e) => {
    const field = e.target.name;
    const value = e.target.value.trim();

    setValueinput({ ...valueinput, [field]: value });
  };

  const loginsubmitvalue = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(valueinput)
      });

      const data = await res.json();

      if (data.token) {
        setMessage('Login successful!');
        // Optionally: Save token and redirect here
        // localStorage.setItem('token', data.token);
        // navigate('/dashboard'); ← if using useNavigate from react-router
      } else {
        setMessage('Login failed. Please check your credentials.');
      }
    } catch (err) {
      setMessage('An error occurred during login.');
      console.error('Login error:', err.message);
    }
  };

  return (
    <div  >
      <h2 className="d-flex Text-Align-center " style={h1Style}>Login</h2>
      <div className="d-flex justify-content-center">
        <form onSubmit={loginsubmitvalue}>
          {message && <div className="alert alert-info">{message}</div>}

          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              <strong>User Name</strong>
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-control"
              onChange={loginvalue}
              placeholder="Enter username"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              onChange={loginvalue}
              placeholder="Enter password"
              required
            />
          </div>

          <div className="d-grid mb-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>

          <div className="text-center">
            <span>Don't have an account? </span>
            <Link to="/signup">Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
