import React from 'react';
import './TopFansList.css';

function TopFansList() {
  // Example top fans data - this would come from your backend in a real app
  const topFans = [
    { name: "Fan 1", listens: 150 },
    { name: "Fan 2", listens: 130 },
    { name: "Fan 3", listens: 120 },
    { name: "Fan 4", listens: 100 },
    { name: "Fan 5", listens: 90 },
    { name: "Fan 6", listens: 85 },
    { name: "Fan 7", listens: 80 },
    { name: "Fan 8", listens: 75 },
    { name: "Fan 9", listens: 70 },
    { name: "Fan 10", listens: 65 },
  ];

  return (
    <div className="top-fans-list">
      <h2>Top Fans</h2>
      <ul>
        {topFans.map((fan, index) => (
          <li key={index}>
            {fan.name}: {fan.listens} listens
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopFansList;
