import React from 'react';

function MobileRemaining() {
  const remainingMobiles = [
    { id: 1, name: 'Google Pixel 6' },
    { id: 2, name: 'OnePlus 9' }
  ];

  return (
    <div className="main-content">
      <h2>Mobile Remaining for Sale</h2>
      <ul>
        {remainingMobiles.map(mobile => (
          <li key={mobile.id}>
            {mobile.name}
            <button>Sell</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MobileRemaining;