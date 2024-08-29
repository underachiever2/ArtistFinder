import React, { useState } from 'react';
import './UploadSection.css';

function UploadSection() {
  const [albumName, setAlbumName] = useState('');
  const [songs, setSongs] = useState([]);
  const [frontCover, setFrontCover] = useState(null);
  const [backCover, setBackCover] = useState(null);
  const [booklet, setBooklet] = useState(null);
  const [featuredArtists, setFeaturedArtists] = useState('');
  const [writers, setWriters] = useState('');
  const [producers, setProducers] = useState('');

  const handleSongUpload = (event) => {
    const newSongs = [...songs, ...event.target.files];
    setSongs(newSongs);
  };

  const handleRearrange = (index, direction) => {
    const newSongs = [...songs];
    const [removed] = newSongs.splice(index, 1);
    newSongs.splice(index + direction, 0, removed);
    setSongs(newSongs);
  };

  const handleCoverUpload = (event, type) => {
    const file = event.target.files[0];
    if (type === 'front') {
      setFrontCover(file);
    } else if (type === 'back') {
      setBackCover(file);
    } else if (type === 'booklet') {
      setBooklet(file);
    }
  };

  const handleSubmit = () => {
    // Logic to submit album details, including metadata and files
    const albumData = {
      albumName,
      songs,
      frontCover,
      backCover,
      booklet,
      featuredArtists,
      writers,
      producers,
    };
    console.log('Submitting album:', albumData);
    // Submit to backend
  };

  return (
    <div className="upload-section">
      <h2>Upload Your Album</h2>

      <div className="advice">
        <p>
          <strong>Advice:</strong> The front cover should be album art. The back cover should include the album art with the names of songs and artists, including any featured artists. The booklet should contain lyrics and information about each song.
        </p>
      </div>

      <input
        type="text"
        placeholder="Album Name"
        value={albumName}
        onChange={(e) => setAlbumName(e.target.value)}
        className="album-name-input"
      />

      <div className="song-upload">
        <label htmlFor="songs-upload" className="upload-label">Upload Songs</label>
        <input
          type="file"
          id="songs-upload"
          multiple
          accept="audio/*"
          onChange={handleSongUpload}
        />
        <ul className="song-list">
          {songs.map((song, index) => (
            <li key={index}>
              {song.name}
              <button
                disabled={index === 0}
                onClick={() => handleRearrange(index, -1)}
              >
                ↑
              </button>
              <button
                disabled={index === songs.length - 1}
                onClick={() => handleRearrange(index, 1)}
              >
                ↓
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="cover-upload">
        <label htmlFor="front-cover-upload" className="upload-label">Upload Front Cover</label>
        <input
          type="file"
          id="front-cover-upload"
          accept="image/jpeg,image/png"
          onChange={(e) => handleCoverUpload(e, 'front')}
        />
        <label htmlFor="back-cover-upload" className="upload-label">Upload Back Cover</label>
        <input
          type="file"
          id="back-cover-upload"
          accept="image/jpeg,image/png"
          onChange={(e) => handleCoverUpload(e, 'back')}
        />
        <label htmlFor="booklet-upload" className="upload-label">Upload Booklet (PDF)</label>
        <input
          type="file"
          id="booklet-upload"
          accept="application/pdf"
          onChange={(e) => handleCoverUpload(e, 'booklet')}
        />
      </div>

      <div className="metadata-inputs">
        <input
          type="text"
          placeholder="Featured Artists"
          value={featuredArtists}
          onChange={(e) => setFeaturedArtists(e.target.value)}
        />
        <input
          type="text"
          placeholder="Contributing Writers"
          value={writers}
          onChange={(e) => setWriters(e.target.value)}
        />
        <input
          type="text"
          placeholder="Producers"
          value={producers}
          onChange={(e) => setProducers(e.target.value)}
        />
      </div>

      <button onClick={handleSubmit} className="submit-button">Submit Album</button>
    </div>
  );
}

export default UploadSection;
