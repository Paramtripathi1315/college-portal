const express = require('express');
const router = express.Router();
const { verifyToken, requireAdmin } = require('../Middleware/authMiddleware');

router.get('/dashboard', verifyToken, requireAdmin, (req, res) => {
  res.json({ message: 'Welcome to Admin Dashboard' });
});

module.exports = router;
