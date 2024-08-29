import React from 'react';
import { Link } from 'react-router-dom';
import './UserLandingPage.css';

function UserLandingPage() {
  return (
    <div className="user-dashboard">
      <header className="user-header">
        <h1>User Dashboard</h1>
        <div className="nav-buttons">
          <Link to="/" className="nav-button">Go to Artist Dashboard</Link>
          <Link to="/admin" className="nav-button">Go to Admin Dashboard</Link>
        </div>
      </header>

      <div className="user-sections">
        <div className="user-section">
          <h2>Favorite Artists</h2>
          <p>No favorite artists yet.</p>
        </div>
        <div className="user-section">
          <h2>Favorite Songs</h2>
          <p>No favorite songs yet.</p>
        </div>
        <div className="user-section">
          <h2>Purchased Albums</h2>
          <p>No albums purchased yet.</p>
        </div>
      </div>

      <div className="media-player">
        <h2>Now Playing</h2>
        <p>Song Title - Artist Name</p>
        <p>Produced by: Producer Name</p>
        <p>Next Song: Next Song Title</p>
        <button className="media-button">Favorite this Song</button>
        <button className="media-button">View Artist Page</button>
        <button className="media-button">Play This Song</button>
        <button className="media-button">Add to Queue</button>
      </div>
    </div>
  );
}

export default UserLandingPage;
