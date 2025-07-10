const express = require('express');
const router = express.Router();
const grievanceController = require('../Controllers/grievanceController');

// @route   POST /api/grievance
// @desc    Submit a grievance
// @access  Public
router.post('/', grievanceController.submitGrievance);

// @route   GET /api/grievance
// @desc    Get all grievances (Admin only)
// @access  Admin
router.get('/', grievanceController.getAllGrievances); // assuming you have this in controller

module.exports = router;
