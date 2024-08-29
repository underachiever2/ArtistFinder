import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import UploadSingleSong from './components/UploadSingleSong';
import UploadAlbum from './components/UploadAlbum';
import StatsSection from './components/StatsSection';
import TopFansList from './components/TopFansList';
import ManageUploads from './components/ManageUploads';
import AdminLandingPage from './components/AdminLandingPage';
import UserLandingPage from './components/UserLandingPage';

function ArtistDashboard() {
  return (
    <>
      <header className="App-header">
        <h1>Artist Dashboard</h1>
        <div className="nav-buttons">
          <Link to="/admin" className="nav-button">Go to Admin Page</Link>
          <Link to="/user" className="nav-button">Go to User Dashboard</Link>
        </div>
      </header>
      <div className="dashboard">
        <div className="left-panel">
          <UploadSingleSong />
          <StatsSection totalPlays={0} totalSongs={0} recentPlays={[]} />
          <TopFansList fans={[]} />
          <ManageUploads />
        </div>
        <div className="right-panel">
          <UploadAlbum />
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/admin" element={<AdminLandingPage />} />
          <Route path="/user" element={<UserLandingPage />} />
          <Route path="/" element={<ArtistDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
