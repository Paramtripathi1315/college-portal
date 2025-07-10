const Admission = require('../models/Admission.Model');

// @desc    Handle new admission form submission
// @route   POST /api/admission
// @access  Public
const submitAdmissionForm = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      dob,
      gender,
      category,
      fatherName,
      motherName,
      course,
      address,
      qualification,
    } = req.body;

    const photo = req.files?.photo?.[0]?.filename || '';
    const signature = req.files?.signature?.[0]?.filename || '';

    const enrollmentNo = `ENR${Math.floor(10000000 + Math.random() * 90000000)}`;

    const exists = await Admission.findOne({ email, course });
    if (exists) {
      return res.status(400).json({ message: 'Admission already exists for this email and course.' });
    }

    const newAdmission = new Admission({
      fullName,
      email,
      phone,
      dob,
      gender,
      category,
      fatherName,
      motherName,
      course,
      address,
      qualification,
      profileImage: photo,
      signature,
      enrollmentNo,
    });

    await newAdmission.save();

    res.status(201).json({
      message: 'Admission submitted successfully!',
      enrollmentNo,
    });
  } catch (err) {
    console.error('Admission submission error:', err);
    res.status(500).json({ message: 'Server error while submitting admission form.' });
  }
};

const getAllAdmissions = async (req, res) => {
  try {
    const data = await Admission.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};


const getAdmissionById = async (req, res) => {
  try {
    const admission = await Admission.findById(req.params.id);
    if (!admission) return res.status(404).json({ message: "Not found" });
    res.json(admission);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  submitAdmissionForm,
  getAllAdmissions,
  getAdmissionById,
};
