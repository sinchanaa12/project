import React, { useState } from 'react';
import '../styles/form.css'; // Import the CSS file

const Form = () => {
  const [pincode, setPincode] = useState('');

  const handlePincodeChange = (e) => {
    setPincode(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission and fetch pickup schedule information using the pincode.
    // You can make an API call or handle it as needed.
  }

  return (
    <section id="Need More Bins? Let Us Know!" className="form-container">
      <h2>Need More Bins? Let Us Know!</h2>
      <form>
        <div className="form-field">
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-field">
          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-field">
          <label htmlFor="address">Your Address:</label>
          <textarea id="address" name="address" required></textarea>
        </div>

        <div className="form-field">
          <label htmlFor="reason">Reason for Additional Bins:</label>
          <textarea id="reason" name="reason" required></textarea>
        </div>
        <button type="submit">Submit Request</button>
</form>  
        <form>
        <div className="form-field">
          <h2>Discover Your Pickup Schedule</h2>
          <p>To find out waste collection timings for your area, please enter your pincode below:</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="pincode">Enter Pincode:</label>
            <input type="text" id="pincode" name="pincode" value={pincode} onChange={handlePincodeChange} required />
            <button type="submit">Get Timings</button>
          </form>
        </div>

       
      </form>
    </section>
  );
};

export default Form;