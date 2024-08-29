import React from 'react';
import { Link } from 'react-router-dom';
import './AdminLandingPage.css';

function AdminLandingPage() {
  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h1>Admin Dashboard</h1>
        <Link to="/" className="nav-button">Go to Artist Dashboard</Link>
      </header>
      <div className="admin-sections">
        <div className="admin-section">
          <h2>User Management</h2>
          <p>Manage user accounts, roles, and permissions.</p>
          <button className="admin-button">View Users</button>
        </div>
        <div className="admin-section">
          <h2>Content Management</h2>
          <p>Manage all uploaded content including songs, albums, and links.</p>
          <button className="admin-button">View Content</button>
        </div>
        <div className="admin-section">
          <h2>Site Statistics</h2>
          <p>View overall statistics such as total users, plays, and uploads.</p>
          <button className="admin-button">View Statistics</button>
        </div>
        <div className="admin-section">
          <h2>Reported Content</h2>
          <p>Handle content that has been reported by users.</p>
          <button className="admin-button">View Reports</button>
        </div>
        <div className="admin-section">
          <h2>Site Settings</h2>
          <p>Manage general site settings such as themes and payment options.</p>
          <button className="admin-button">Manage Settings</button>
        </div>
        <div className="admin-section">
          <h2>Announcements</h2>
          <p>Post announcements or messages to all users.</p>
          <button className="admin-button">Create Announcement</button>
        </div>
      </div>
    </div>
  );
}

export default AdminLandingPage;

