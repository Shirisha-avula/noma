import React, { useState } from 'react';
import './RegistrationPage.css'; // Import CSS file for styling

function RegistrationPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [state, setState] = useState('');
  const [panCard, setPanCard] = useState('');
  const [aadharCard, setAadharCard] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registration submitted:', {
      firstName,
      lastName,
      mobileNumber,
      state,
      panCard,
      aadharCard,
      address
    });
    // You can send this data to your backend for further processing
  };

  return (
    <div className="registration-container">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input type="text" id="mobileNumber" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="state">State:</label>
          <input type="text" id="state" value={state} onChange={(e) => setState(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="panCard">PAN Card Number:</label>
          <input type="text" id="panCard" value={panCard} onChange={(e) => setPanCard(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="aadharCard">Aadhar Card Number:</label>
          <input type="text" id="aadharCard" value={aadharCard} onChange={(e) => setAadharCard(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationPage;
