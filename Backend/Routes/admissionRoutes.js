const express = require("express");
const router = express.Router();
const {
  submitAdmissionForm,
  getAllAdmissions,
  getAdmissionById,
} = require("../Controllers/admissionController");
const upload = require("../middleware/upload");

// POST /api/admission - Submit admission form with file upload
router.post("/", upload.fields([{ name: 'photo' }, { name: 'signature' }]), submitAdmissionForm);

// GET /api/admission - Get all admissions
router.get("/", getAllAdmissions);

// GET /api/admission/:id - Get admission by ID
router.get("/:id", getAdmissionById);

module.exports = router;
