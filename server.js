const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const stripe = require('stripe')('your_stripe_secret_key');
const path = require('path');

// Initialize Express
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb://localhost/music-sharing-platform', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// User Model
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', UserSchema);

// Middleware to protect routes
const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'No token provided' });

  try {
    const decoded = jwt.verify(token, 'your_jwt_secret');
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// Registration Route
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to register user' });
  }
});

// Login Route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Failed to log in' });
  }
});

// File Upload Setup with Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

// Single Track Upload Route
app.post('/upload', authMiddleware, upload.single('track'), (req, res) => {
  // Example: Store metadata in MongoDB
  // const track = new Track({ ... });
  // track.save();

  res.json({ message: 'File uploaded successfully', file: req.file });
});

// Album Upload Route
app.post('/upload-album', authMiddleware, upload.array('tracks', 10), (req, res) => {
  // Example: Store album metadata in MongoDB
  res.json({ message: 'Album uploaded successfully', files: req.files });
});

// Payment Route
app.post('/payment', authMiddleware, async (req, res) => {
  const { amount, token } = req.body;
  try {
    const charge = await stripe.charges.create({
      amount,
      currency: 'usd',
      description: 'Music Purchase',
      source: token.id,
    });

    res.status(200).json({ charge });
  } catch (error) {
    res.status(500).json({ error: 'Payment failed' });
  }
});

// Test Route
app.get('/', (req, res) => {
  res.send('Welcome to the Music Sharing Platform!');
});

// Serve static files from the "uploads" directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Start Server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
