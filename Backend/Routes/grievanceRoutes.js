const express = require('express');
const router = express.Router();
const Grievance = require('../models/Grievance.Model');

// @route   POST /api/grievance
// @desc    Submit a grievance
// @access  Public or Authenticated (based on your design)
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const grievance = new Grievance({ name, email, subject, message });
    await grievance.save();

    res.status(201).json({ message: 'Grievance submitted successfully' });
  } catch (err) {
    console.error('Grievance Error:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// @route   GET /api/grievance
// @desc    Get all grievances (Admin only)
// @access  Admin
router.get('/', async (req, res) => {
  try {
    const grievances = await Grievance.find().sort({ createdAt: -1 });
    res.status(200).json(grievances);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch grievances' });
  }
});

module.exports = router;
