import React from 'react';
import './App.css';
import Profile from './components/Profile';
import MusicPlayer from './components/MusicPlayer';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MySpace Clone</h1>
      </header>
      <div className="content">
        <Profile />
        <MusicPlayer />
        <FriendsList />
      </div>
    </div>
  );
}

export default App;
