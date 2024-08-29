const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

const upload = multer({ dest: 'uploads/' });

app.post('/upload-album', upload.fields([
  { name: 'songs', maxCount: 10 },
  { name: 'frontCover', maxCount: 1 },
  { name: 'backCover', maxCount: 1 },
  { name: 'booklet', maxCount: 1 },
]), (req, res) => {
  const albumData = {
    albumName: req.body.albumName,
    songs: req.files.songs,
    frontCover: req.files.frontCover ? req.files.frontCover[0] : null,
    backCover: req.files.backCover ? req.files.backCover[0] : null,
    booklet: req.files.booklet ? req.files.booklet[0] : null,
    featuredArtists: req.body.featuredArtists,
    writers: req.body.writers,
    producers: req.body.producers,
  };

  console.log('Album Data:', albumData);
  // Save to database and handle other logic

  res.status(200).json({ message: 'Album uploaded successfully!' });
});

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});
