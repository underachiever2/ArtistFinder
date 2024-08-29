import React from 'react';
import './MusicPlayer.css';

function MusicPlayer() {
  return (
    <div className="music-player">
      <h2>Now Playing</h2>
      <audio controls>
        <source src="song-url.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default MusicPlayer;
