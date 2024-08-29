import React from 'react';
import './App.css';
import Profile from './components/Profile';
import UploadSection from './components/UploadSection';
import StatsSection from './components/StatsSection';
import FundsSection from './components/FundsSection';
import TopFansList from './components/TopFansList';
import ManageUploads from './components/ManageUploads';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Artist Dashboard</h1>
      </header>
      <div className="content">
        <Profile />
        <div className="main-section">
          <UploadSection />
          <StatsSection />
          <FundsSection />
          <ManageUploads />
        </div>
        <TopFansList />
      </div>
    </div>
  );
}

export default App;
