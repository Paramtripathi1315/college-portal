const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const { submitAdmissionForm, getAllAdmissions } = require('../Controllers/admissionController');

// POST with image upload
router.post(
  '/',
  upload.fields([
    { name: 'photo', maxCount: 1 },
    { name: 'signature', maxCount: 1 },
  ]),
  submitAdmissionForm
);

// GET all admissions
router.get('/', getAllAdmissions);

module.exports = router;
