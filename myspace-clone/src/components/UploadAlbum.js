import React, { useState } from 'react';
import './UploadAlbum.css';

function UploadAlbum() {
  const [albumName, setAlbumName] = useState('');
  const [tracks, setTracks] = useState(Array(16).fill({}));
  const [submissionAllowed, setSubmissionAllowed] = useState(false);

  const handleTrackChange = (index, field, value) => {
    const updatedTracks = [...tracks];
    updatedTracks[index] = {
      ...updatedTracks[index],
      [field]: value,
    };
    setTracks(updatedTracks);

    const filledTracks = updatedTracks.filter(
      (track) => track.songFile && track.title
    );
    setSubmissionAllowed(filledTracks.length >= 10);
  };

  const handleFileUpload = (index, event) => {
    const file = event.target.files[0];
    handleTrackChange(index, 'songFile', file);
  };

  const handleSubmit = () => {
    if (submissionAllowed) {
      const albumData = {
        albumName,
        tracks: tracks.filter((track) => track.songFile && track.title),
      };
      console.log('Submitting album:', albumData);
      // Submit to backend logic here
    } else {
      alert('You must have at least 10 tracks to submit the album.');
    }
  };

  return (
    <div className="upload-album">
      <h2>Create an Album</h2>
      <input
        type="text"
        placeholder="Album Name"
        value={albumName}
        onChange={(e) => setAlbumName(e.target.value)}
        className="input-field"
      />

      <div className="track-list">
        {tracks.map((track, index) => (
          <div key={index} className="track-item">
            <h3>Track {index + 1}</h3>
            <input
              type="file"
              accept="audio/*"
              onChange={(e) => handleFileUpload(index, e)}
              className="file-input"
            />
            <input
              type="text"
              placeholder="Song Title"
              value={track.title || ''}
              onChange={(e) => handleTrackChange(index, 'title', e.target.value)}
              className="input-field"
            />
            <input
              type="text"
              placeholder="Featured Artists (separated by commas)"
              value={track.featuredArtists || ''}
              onChange={(e) =>
                handleTrackChange(index, 'featuredArtists', e.target.value)
              }
              className="input-field"
            />
            <input
              type="text"
              placeholder="Writers (separated by commas)"
              value={track.writers || ''}
              onChange={(e) =>
                handleTrackChange(index, 'writers', e.target.value)
              }
              className="input-field"
            />
            <input
              type="text"
              placeholder="Producers (separated by commas)"
              value={track.producers || ''}
              onChange={(e) =>
                handleTrackChange(index, 'producers', e.target.value)
              }
              className="input-field"
            />
          </div>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        className="submit-button"
        disabled={!submissionAllowed}
      >
        Submit Album
      </button>
    </div>
  );
}

export default UploadAlbum;
