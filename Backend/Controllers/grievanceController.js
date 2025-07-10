const Grievance = require('../models/Grievance');
const Admission = require('../models/Admission.Model'); // ✅ Import Admission model


// @desc    Submit a grievance
// @route   POST /api/grievance
// @access  Public
exports.submitGrievance = async (req, res) => {
  try {
    const { name, enrollment, course, email, message } = req.body;

    // ✅ Validate all fields
    if (!name || !enrollment || !course || !email || !message) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    // ✅ Check if student exists in admission records
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

    // ✅ Save grievance
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
exports.getAllGrievances = async (req, res) => {
  try {
    const grievances = await Grievance.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, grievances });
  } catch (err) {
    console.error('Fetching Grievances Error:', err);
    res.status(500).json({ success: false, message: 'Server error while fetching grievances.' });
  }
};