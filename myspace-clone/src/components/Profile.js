import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div className="profile">
      <img
        src="https://via.placeholder.com/150"
        alt="Profile"
        className="profile-picture"
      />
      <h2>User Name</h2>
      <p>Location: Somewhere</p>
      <p>Status: Online</p>
    </div>
  );
}

export default Profile;
