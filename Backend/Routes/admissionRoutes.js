const express = require('express');
const router = express.Router();
const Admission = require('../Models/Admission.Model');

router.post('/', async (req, res) => {
  const { email, course } = req.body;

  const exists = await Admission.findOne({ email, course });
  if (exists) {
    return res.status(400).json({ message: "Admission already exists" });
  }

  const randomEnroll = `ENR${Math.floor(Math.random() * 1000000)}`;

  const newAdmission = new Admission({ ...req.body, enrollmentNo: randomEnroll });

  try {
    await newAdmission.save();
    res.status(201).json({ message: "Admission successful", enrollmentNo: randomEnroll });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;
