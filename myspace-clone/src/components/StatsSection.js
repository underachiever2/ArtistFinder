import React from 'react';
import './StatsSection.css';

function StatsSection({ totalPlays = 0, totalSongs = 0, recentPlays = [] }) {
  return (
    <div className="stats-section">
      <h2>Your Music Stats</h2>
      <p>Total Plays: {totalPlays}</p>
      <p>Total Songs/Albums: {totalSongs}</p>

      <h3>Recent Plays:</h3>
      {recentPlays.length > 0 ? (
        recentPlays.map((play, index) => (
          <p key={index}>
            {play.name}: {play.count} plays
          </p>
        ))
      ) : (
        <p>No plays yet</p>
      )}
    </div>
  );
}

export default StatsSection;
