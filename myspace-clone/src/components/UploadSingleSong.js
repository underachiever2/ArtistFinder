import React, { useState } from 'react';
import './UploadSingleSong.css';

function UploadSingleSong() {
  const [songTitle, setSongTitle] = useState('');
  const [songFile, setSongFile] = useState(null);
  const [featuredArtists, setFeaturedArtists] = useState('');
  const [producers, setProducers] = useState('');
  const [writers, setWriters] = useState('');

  const handleSongUpload = (event) => {
    setSongFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    const songData = {
      songTitle,
      songFile,
      featuredArtists,
      producers,
      writers,
    };
    console.log('Submitting single song:', songData);
    // Submit to backend
  };

  return (
    <div className="upload-single-song">
      <h2>Upload a Single Song</h2>

      <input
        type="text"
        placeholder="Song Title"
        value={songTitle}
        onChange={(e) => setSongTitle(e.target.value)}
        className="input-field"
      />

      <div className="file-upload">
        <label htmlFor="song-upload" className="upload-label">Upload Song</label>
        <input
          type="file"
          id="song-upload"
          accept="audio/*"
          onChange={handleSongUpload}
        />
      </div>

      <input
        type="text"
        placeholder="Featured Artists"
        value={featuredArtists}
        onChange={(e) => setFeaturedArtists(e.target.value)}
        className="input-field"
      />

      <input
        type="text"
        placeholder="Producers"
        value={producers}
        onChange={(e) => setProducers(e.target.value)}
        className="input-field"
      />

      <input
        type="text"
        placeholder="Writers"
        value={writers}
        onChange={(e) => setWriters(e.target.value)}
        className="input-field"
      />

      <button onClick={handleSubmit} className="submit-button">Submit Song</button>
    </div>
  );
}

export default UploadSingleSong;
