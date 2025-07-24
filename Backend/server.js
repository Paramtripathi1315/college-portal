// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "../frontend/build", "index.html"))
  );
}

// Load environment variables
dotenv.config();

// Route imports
const authRoutes = require('./Routes/authRoutes');
const admissionRoutes = require('./Routes/admissionRoutes');
const adminRoutes = require('./Routes/adminRoutes');
const grievanceRoutes = require('./Routes/grievanceRoutes');


// Initialize Express app
const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Serve uploaded files (photos, signatures)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/admissions', admissionRoutes); // Matches frontend route
// server.js

app.use('/api/grievances', grievanceRoutes); // ✅ Not /api/grievance (with no "s")
app.use('/api/admin', adminRoutes);

// Fallback route
app.get('/', (req, res) => {
  res.send('🎓 College Portal Backend Running');
});
console.log("MONGO_URI:", process.env.MONGO_URI);

// Connect to MongoDB and start server
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('✅ MongoDB connected');
    
    // Start server only after DB is connected
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1); // Exit if DB connection fails
  });
