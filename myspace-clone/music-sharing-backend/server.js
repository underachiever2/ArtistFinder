const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON bodies

// Set up storage with multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Save files with a timestamp
  }
});

app.get('/', (req, res) => {
  res.send('Welcome to the Music Sharing Platform!');
});


const upload = multer({ storage: storage });

// Route to handle album uploads
app.post('/upload-album', upload.fields([
  { name: 'songs', maxCount: 10 },
  { name: 'frontCover', maxCount: 1 },
  { name: 'backCover', maxCount: 1 },
  { name: 'booklet', maxCount: 1 },
]), (req, res) => {
  const albumData = {
    albumName: req.body.albumName,
    songs: req.files.songs || [],
    frontCover: req.files.frontCover ? req.files.frontCover[0] : null,
    backCover: req.files.backCover ? req.files.backCover[0] : null,
    booklet: req.files.booklet ? req.files.booklet[0] : null,
    featuredArtists: req.body.featuredArtists || '',
    writers: req.body.writers || '',
    producers: req.body.producers || '',
  };

  console.log('Album Data:', albumData);
  // Here you would typically save the data to your database

  res.status(200).json({ message: 'Album uploaded successfully!', albumData });
});

// Serve static files (e.g., cover art, booklet)
app.use('/uploads', express.static('uploads'));

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
