// Routes/grievanceRoutes.js
const express = require('express');
const router = express.Router();
const { getAllGrievances, submitGrievance } = require('../Controllers/grievanceController');

router.get('/', getAllGrievances); // GET all grievances
router.post('/', submitGrievance); // POST a new grievance

module.exports = router;
