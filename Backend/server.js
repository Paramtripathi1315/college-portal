// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const authRoutes = require('./Routes/authRoutes');
const admissionRoutes = require('./Routes/admissionRoutes');
const User = require('./models/User'); // ✅ Admin model
const grievanceRoutes = require('./Routes/grievanceRoutes');
const adminRoutes = require('./Routes/adminRoutes');


// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/admission', admissionRoutes);
app.use('/api/grievance', grievanceRoutes);
app.use('/api/admin', adminRoutes);


// Serve uploaded files (if any)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log('✅ MongoDB connected');

    
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
  });

// Fallback route
app.get('/', (req, res) => {
  res.send('🎓 College Portal Backend Running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
