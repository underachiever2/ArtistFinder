import React, { useState } from 'react';

const Upload = () => {
  const [title, setTitle] = useState('');
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    for (let i = 0; i < files.length; i++) {
      formData.append('tracks', files[i]);
    }

    const res = await fetch('/upload', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      alert('Upload successful!');
    } else {
      alert('Upload failed.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Album Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Upload Tracks:
        <input type="file" multiple onChange={handleFileChange} />
      </label>
      <button type="submit">Upload</button>
    </form>
  );
};

export default Upload;
