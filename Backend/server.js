// backend/server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "../frontend/build", "index.html"))
  );
}

// Load environment variables
dotenv.config();

import authRoutes from './Routes/authRoutes.js';
import admissionRoutes from './Routes/admissionRoutes.js';
import adminRoutes from './Routes/adminRoutes.js';
import grievanceRoutes from './Routes/grievanceRoutes.js';


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
