import React, { useState } from 'react';

const Contact = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    padding: '40px',
    backgroundColor: '#f5f5f5',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    color: '#333'
  };

  const titleStyle = {
    fontSize: '2.5em',
    marginBottom: '30px',
    color: '#18bc9c'
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '500px',
    width: '100%',
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '6px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
  };

  const inputStyle = {
    padding: '12px',
    margin: '10px 0',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '1em',
    outline: 'none'
  };

  const buttonStyle = {
    padding: '12px',
    backgroundColor: '#2c3e50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1.1em',
    cursor: 'pointer',
    marginTop: '20px'
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message Sent!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    // You would integrate this with a backend to send the form data.
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Contact Us</h1>
      <form style={formStyle} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          style={inputStyle}
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          style={inputStyle}
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          style={{ ...inputStyle, height: '150px' }}
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" style={buttonStyle}>Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
