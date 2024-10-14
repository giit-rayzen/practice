import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Recharge = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation for 10-digit mobile number
    if (mobileNumber.length === 10 && /^\d+$/.test(mobileNumber)) {
      // Navigate to /plans page
      navigate('/plans');
    } else {
      alert('Please enter a valid 10-digit mobile number');
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Recharge Your Mobile</h2>
      <p>Enter your mobile number to see available plans:</p>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          placeholder="Enter your 10-digit mobile number"
          maxLength="10"
          style={{
            padding: '10px',
            width: '250px',
            fontSize: '16px',
            marginBottom: '20px',
          }}
        />
        <br />
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Recharge;
