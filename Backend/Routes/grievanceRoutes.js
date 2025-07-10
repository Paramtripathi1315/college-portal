// routes/grievanceRoutes.js
const express = require("express");
const router = express.Router();
const grievanceController = require("../controllers/grievanceController");

// POST /api/grievance – Submit grievance
router.post("/", grievanceController.submitGrievance);

// GET /api/grievance – Get all grievances (admin only)
router.get("/", grievanceController.getAllGrievances);

// GET /api/grievance/:id – Get grievance by ID
router.get("/:id", grievanceController.getGrievanceById);

module.exports = router;
