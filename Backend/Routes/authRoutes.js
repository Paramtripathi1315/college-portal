const express = require('express');
const router = express.Router();
const { login, register } = require('../controllers/authController');

// @route   POST /api/auth/register
// @desc    Register new user (Admin or Student)
// @access  Public
router.post('/register', register);

// @route   POST /api/auth/login
// @desc    Login for Admin/User
// @access  Public
router.post('/login', login);

module.exports = router;
