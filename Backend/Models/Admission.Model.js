// backend/models/admissionModel.js
const mongoose = require('mongoose');

const admissionSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  enrollmentNo: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  qualification: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    required: false
  },
  signature: {
    type: String,
    required: false
  },
}, { timestamps: true });

module.exports = mongoose.model('Admission', admissionSchema);
