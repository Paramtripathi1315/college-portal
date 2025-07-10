const express = require('express');
const router = express.Router();
const { login, register, getProfile,  } = require('../Controllers/authController');

router.post('/login', login);
router.post('/signup', register);
router.get('/profile', getProfile); // Optional: Used in AdminDashboard

module.exports = router;
