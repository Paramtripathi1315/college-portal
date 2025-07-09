const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const Admission = require('../models/Admission.Model');

// POST /api/admission
router.post(
  '/',
  upload.fields([
    { name: 'photo', maxCount: 1 },
    { name: 'signature', maxCount: 1 }
  ]),
  async (req, res) => {
    try {
      const { email, course } = req.body;

      // Check if admission already exists
      const exists = await Admission.findOne({ email, course });
      if (exists) {
        return res.status(400).json({ message: 'Admission already exists for this email and course.' });
      }

      // Generate enrollment number
      const enrollmentNo = `ENR${Math.floor(100000 + Math.random() * 900000)}`;

      // Prepare data including file paths
      const photo = req.files?.photo?.[0]?.filename || null;
      const signature = req.files?.signature?.[0]?.filename || null;

      const newAdmission = new Admission({
        ...req.body,
        enrollmentNo,
        photo,
        signature
      });

      await newAdmission.save();

      res.status(201).json({
        message: 'Admission submitted successfully',
        enrollmentNo
      });
    } catch (error) {
      console.error('Admission Error:', error);
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  }
);

module.exports = router;
