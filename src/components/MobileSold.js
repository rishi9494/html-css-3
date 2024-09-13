import React from 'react';

function MobileSold() {
  const soldMobiles = [
    { id: 1, name: 'iPhone 13', dateSold: '2022-01-01' },
    { id: 2, name: 'Samsung Galaxy S21', dateSold: '2022-02-01' }
  ];

  return (
    <div className="main-content">
      <h2>Mobile Sold</h2>
      <ul>
        {soldMobiles.map(mobile => (
          <li key={mobile.id}>
            {mobile.name} - Sold on {mobile.dateSold}
            <button>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MobileSold;