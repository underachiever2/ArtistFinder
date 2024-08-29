import React from 'react';
import './TopFansList.css';

function TopFansList({ fans = [] }) {
  return (
    <div className="top-fans-list">
      <h2>Top Fans</h2>
      {fans.length > 0 ? (
        fans.map((fan, index) => (
          <p key={index}>
            {fan.name}: {fan.interactions} interactions
          </p>
        ))
      ) : (
        <p>No fans yet</p>
      )}
    </div>
  );
}

export default TopFansList;

