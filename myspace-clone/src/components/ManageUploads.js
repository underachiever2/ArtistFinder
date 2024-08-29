import React from 'react';
import './ManageUploads.css';

function ManageUploads() {
  const songs = [
    { id: 1, title: 'Song 1', type: 'single' },
    { id: 2, title: 'Album 1', type: 'album' },
    { id: 3, title: 'Link 1', type: 'link', url: 'http://example.com' },
  ];

  const handleEdit = (id) => {
    console.log(`Editing item with ID: ${id}`);
    // Implement edit logic here
  };

  const handleRemove = (id) => {
    console.log(`Removing item with ID: ${id}`);
    // Implement remove logic here
  };

  const handlePromote = (id) => {
    console.log(`Promoting item with ID: ${id}`);
    // Implement promote logic here
  };

  return (
    <div className="manage-uploads">
      <h2>Manage Your Content</h2>
      {songs.map((song) => (
        <div key={song.id} className="content-item">
          <h3>{song.title}</h3>
          <p>Type: {song.type}</p>
          {song.type === 'link' && <a href={song.url} target="_blank" rel="noopener noreferrer">Visit Link</a>}
          <div className="content-actions">
            <button onClick={() => handleEdit(song.id)} className="edit-button">Edit</button>
            <button onClick={() => handleRemove(song.id)} className="remove-button">Remove</button>
            <button onClick={() => handlePromote(song.id)} className="promote-button">Promote</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ManageUploads;
