import React, { useState } from 'react';
import './UploadSingleSong.css';

function UploadSingleSong() {
  // Example state for handling song upload, title, etc.
  const [songTitle, setSongTitle] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    // Handle the form submission logic here
    console.log('Song title:', songTitle);
    console.log('File:', file);
  };

  return (
    <div className="upload-single-song">
      <h2>Upload Single Song</h2>
      <input
        type="text"
        placeholder="Song Title"
        value={songTitle}
        onChange={(e) => setSongTitle(e.target.value)}
      />
      <input
        type="file"
        onChange={handleFileChange}
      />
      <button onClick={handleSubmit}>Upload</button>
    </div>
  );
}

export default UploadSingleSong;
