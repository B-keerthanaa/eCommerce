import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Form submitted:', formData);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <centre>
      <div className="card shadow-sm p-4" style={{ width: '100%', maxWidth: '450px', borderRadius: '1rem' }}>
        <h2 className="text-center text-primary mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">UserName</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">Create Account</button>
        </form>
        <div className="text-center mt-3">
          <small className="text-muted">
            Already have an account? <a href="/login">Log In</a>
          </small>
        </div>
      </div>
      </centre>
    </div>
  );
};

export default Signup;
