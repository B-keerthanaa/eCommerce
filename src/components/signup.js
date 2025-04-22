import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';
const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = fetch('https://fakestoreapi.com/users', {
        method: 'POST',
        body: JSON.stringify({
          email,
          username,
          password,
          name: {
            firstname,
            lastname
          },
          address: {
            city: 'Sample City',
            street: '123 Sample Street',
            number: 1,
            zipcode: '12345-6789',
            geolocation: {
              lat: '0',
              long: '0'
            }
          },
          phone: '123456789'
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) {
        throw new Error('Signup failed');
      }

      const data = await res.json();
      console.log('Signup successful:', data);
      setSuccessMsg('Signup successful! Redirecting to login...');
      setTimeout(() => navigate('/category.js'), 2000); // Redirect after 2 seconds
    } catch (err) {
      //console.error(err);
      setError('Signup failed. Try again.');
    }
  };

  return (
    <div >
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="First Name"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          required
        /><br /><br />
        <input
          type="text"
          placeholder="Last Name"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          required
        /><br /><br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br /><br />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        /><br /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br /><br />
        <button type="submit">Signup</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMsg && <p style={{ color: 'green' }}>{successMsg}</p>}
    </div>
  );
};

export default Signup;
