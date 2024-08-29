import React from 'react';
import './ManageUploads.css';

function ManageUploads() {
  // Example uploads and links data - in a real app, this would come from your backend
  const uploads = [
    { id: 1, title: "Song 1", type: "single", listens: 543, clicks: 0 },
    { id: 2, title: "Song 2", type: "single", listens: 324, clicks: 0 },
    { id: 3, title: "Album 1", type: "album", listens: 676, clicks: 0 },
  ];

  const links = [
    { id: 1, title: "My Spotify Playlist", url: "https://spotify.com", clicks: 150, listens: 0 },
    { id: 2, title: "YouTube Channel", url: "https://youtube.com", clicks: 200, listens: 0 },
  ];

  const handleEdit = (id, type) => {
    // Logic to edit the upload or link
    console.log(`Edit ${type} with ID ${id}`);
  };

  const handleRemove = (id, type) => {
    // Logic to remove the upload or link
    console.log(`Remove ${type} with ID ${id}`);
  };

  const handleTogglePrivacy = (id, type) => {
    // Logic to toggle privacy for upload or link
    console.log(`Toggle privacy for ${type} with ID ${id}`);
  };

  const handlePromote = (id, type) => {
    // Logic to promote the upload or link
    console.log(`Promote ${type} with ID ${id}`);
  };

  return (
    <div className="manage-uploads">
      <h2>Manage Your Music and Links</h2>

      <h3>Music Uploads</h3>
      <ul>
        {uploads.map((upload) => (
          <li key={upload.id}>
            <span className="upload-title">{upload.title}</span>
            <span className="upload-type">({upload.type})</span>
            <span className="upload-listens">{upload.listens} listens</span>
            <div className="upload-actions">
              <button className="action-button" onClick={() => handleEdit(upload.id, 'upload')}>Edit</button>
              <button className="action-button" onClick={() => handleRemove(upload.id, 'upload')}>Remove</button>
              <button className="action-button" onClick={() => handleTogglePrivacy(upload.id, 'upload')}>Toggle Privacy</button>
              <button className="promote-button" onClick={() => handlePromote(upload.id, 'upload')}>Promote</button>
            </div>
          </li>
        ))}
      </ul>

      <h3>Music Links</h3>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <span className="link-title">{link.title}</span>
            <span className="link-url">({link.url})</span>
            <span className="link-clicks">{link.clicks} clicks</span>
            <div className="link-actions">
              <button className="action-button" onClick={() => handleEdit(link.id, 'link')}>Edit</button>
              <button className="action-button" onClick={() => handleRemove(link.id, 'link')}>Remove</button>
              <button className="action-button" onClick={() => handleTogglePrivacy(link.id, 'link')}>Toggle Privacy</button>
              <button className="promote-button" onClick={() => handlePromote(link.id, 'link')}>Promote</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ManageUploads;
