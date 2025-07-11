const Grievance = require('../models/Grievance');
const Admission = require('../models/Admission.Model'); // ✅ Correct import

// @desc    Submit a grievance
// @route   POST /api/grievance
// @access  Public
const submitGrievance = async (req, res) => {
  try {
    const { name, enrollment, course, email, message } = req.body;

    if (!name || !enrollment || !course || !email || !message) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    const student = await Admission.findOne({
      fullName: { $regex: new RegExp(`^${name}$`, 'i') },
      enrollmentNo: enrollment,
      course,
      email: { $regex: new RegExp(`^${email}$`, 'i') }
    });

    if (!student) {
      return res.status(404).json({
        success: false,
        message: 'Student record not found. Please ensure your details match admission records.'
      });
    }

    const grievance = new Grievance({ name, enrollment, course, email, message });
    await grievance.save();

    res.status(201).json({ success: true, message: 'Grievance submitted successfully.' });
  } catch (err) {
    console.error('Grievance Submission Error:', err);
    res.status(500).json({ success: false, message: 'Server error while submitting grievance.' });
  }
};

// @desc    Get all grievances (admin only)
// @route   GET /api/grievance
// @access  Admin
const getAllGrievances = async (req, res) => {
  try {
    const data = await Grievance.find();
    res.json(data); // ✅ sends all grievance data
  } catch (err) {
    console.error("Grievance fetch error:", err);
    res.status(500).json({ error: "Server error" });
  }
};

// @desc    Get a grievance by ID
// @route   GET /api/grievance/:id
// @access  Admin

const getGrievanceById = async (req, res) => {
  try {
    const grievance = await Grievance.findById(req.params.id);
    if (!grievance) {
      return res.status(404).json({ success: false, message: "Grievance not found" });
    }
    res.status(200).json(grievance);
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};


module.exports = {
  submitGrievance,
  getAllGrievances,
  getGrievanceById,
};
