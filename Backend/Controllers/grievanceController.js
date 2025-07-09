const Grievance = require('../models/Grievance');

// @desc    Submit a grievance
// @route   POST /api/grievance
// @access  Public
exports.submitGrievance = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    const grievance = new Grievance({ name, email, subject, message });
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
