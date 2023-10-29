// Donate.js

import React from 'react';
import "../styles/donate.css";
function Donate() {
  return (
    <div className="donate-container">
      <h1>Donate to Support Us</h1>
      <p>Your contribution helps us continue our mission. Thank you!</p>
      <form>
      <label htmlFor="amount">Amount:</label>
        <input type="text" id="amount" name="amount" />
        <button type="submit">Donate</button>
      </form>
      

    </div>
  );
}

export default Donate;
