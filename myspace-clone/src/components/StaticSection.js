import React from 'react';
import './StatsSection.css';

function StatsSection() {
  // Example stats data - this would come from your backend in a real app
  const stats = {
    totalPlays: 1543,
    totalSongs: 10,
    recentPlays: [
      { title: "Song 1", plays: 543 },
      { title: "Song 2", plays: 324 },
      { title: "Album 1", plays: 676 },
    ],
  };

  return (
    <div className="stats-section">
      <h2>Your Music Stats</h2>
      <p>Total Plays: {stats.totalPlays}</p>
      <p>Total Songs/Albums: {stats.totalSongs}</p>
      <h3>Recent Plays:</h3>
      <ul>
        {stats.recentPlays.map((item, index) => (
          <li key={index}>
            {item.title}: {item.plays} plays
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StatsSection;
