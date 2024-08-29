import React from 'react';
import './FriendsList.css';

function FriendsList() {
  return (
    <div className="friends-list">
      <h2>Friends</h2>
      <ul>
        <li><img src="https://via.placeholder.com/50" alt="Friend" /> Friend 1</li>
        <li><img src="https://via.placeholder.com/50" alt="Friend" /> Friend 2</li>
        <li><img src="https://via.placeholder.com/50" alt="Friend" /> Friend 3</li>
      </ul>
    </div>
  );
}

export default FriendsList;
