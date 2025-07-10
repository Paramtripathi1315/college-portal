const express = require('express');
const router = express.Router();
const { verifyToken, requireAdmin } = require('../middleware/authMiddleware');

// @desc    Admin Dashboard
// @route   GET /api/admin/dashboard
// @access  Admin
router.get('/dashboard', verifyToken, requireAdmin, (req, res) => {
  res.json({ message: 'Welcome to Admin Dashboard' });
});

module.exports = router;
