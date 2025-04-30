import React from 'react';

const Services = () => {
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

  const listStyle = {
    listStyle: 'none',
    padding: 0,
    maxWidth: '700px',
    width: '100%'
  };

  const itemStyle = {
    backgroundColor: '#ffffff',
    padding: '15px 20px',
    marginBottom: '12px',
    borderRadius: '6px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
    transition: 'all 0.3s ease'
  };

  const hoverEffect = {
    backgroundColor: '#eaf4ff',
    transform: 'translateY(-2px)'
  };

  const ServiceItem = ({ text }) => {
    const [hovered, setHovered] = React.useState(false);

    return (
      <li
        style={{
          ...itemStyle,
          ...(hovered ? hoverEffect : {})
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {text}
      </li>
    );
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Our Services</h1>
      <ul style={listStyle}>
        <ServiceItem text="Wide Range of Products – from electronics to home essentials." />
        <ServiceItem text="Fast & Reliable Delivery across the country." />
        <ServiceItem text="Secure Online Payments with multiple options." />
        <ServiceItem text="24/7 Customer Support via chat and email." />
        <ServiceItem text="Easy Returns & Refunds with no hassle." />
        <ServiceItem text="Daily Deals and Special Discounts." />
        <ServiceItem text="Order Tracking in real time." />
        
      </ul>
    </div>
  );
};

export default Services;
