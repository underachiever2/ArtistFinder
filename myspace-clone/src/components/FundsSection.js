import React, { useState } from 'react';
import './FundsSection.css';

function FundsSection() {
  const [funds, setFunds] = useState(500); // Example initial funds
  const [spent, setSpent] = useState(200); // Example spent amount

  const handleReloadFunds = () => {
    // Logic for reloading funds (e.g., integrating Stripe)
    const additionalFunds = 100;
    setFunds(funds + additionalFunds);
  };

  return (
    <div className="funds-section">
      <h2>Your Funds</h2>
      <p>Current Funds: ${funds}</p>
      <p>Total Spent: ${spent}</p>
      <button className="reload-button" onClick={handleReloadFunds}>
        Reload Funds
      </button>
    </div>
  );
}

export default FundsSection;
