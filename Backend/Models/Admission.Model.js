const mongoose = require('mongoose');

const admissionSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  course: String,
  dob: String,
  address: String,
  qualification: String,
  enrollmentNo: String
}, { timestamps: true });

module.exports = mongoose.model("Admission", admissionSchema);
