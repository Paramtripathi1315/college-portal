const express = require('express');
const router = express.Router();
const { login, register, getProfile } = require('../Controllers/authController');
const { verifyToken } = require('../Middleware/authMiddleware');

// POST /api/auth/signup – Register new user
router.post('/signup', register);

// POST /api/auth/login – Login user
router.post('/login', login);

// GET /api/auth/profile – Get logged-in user details (protected route)
router.get('/profile', verifyToken, getProfile);

module.exports = router;
