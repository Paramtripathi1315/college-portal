const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// @desc    Register new user (admin or student)
// @route   POST /api/auth/register
// @access  Public
const register = async (req, res) => {
  try {
    const { name, email, password, role} = req.body;

<<<<<<< HEAD
    if (!name || !email || !password ) {
=======
<<<<<<< HEAD
    if (!name || !email || !password ) {
=======
    if (!name || !email || !password) {
>>>>>>> ade2f0d89719690d88415374dfc6ba0ffb4a4103
>>>>>>> b0ea0ff1b189f4255088ffa5ffb968de59966815
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ success: false, message: 'User already exists.' });
    }

<<<<<<< HEAD
    // Let mongoose pre-save hook hash the password
    const user = new User({ name, email, password, role });
=======
   const user = new User({ name, email, password, role }); // Let pre-save do hashing

>>>>>>> b0ea0ff1b189f4255088ffa5ffb968de59966815

    await user.save();

    return res.status(201).json({ success: true, message: 'User registered successfully.' });
  } catch (err) {
    console.error('Registration Error:', err);
    res.status(500).json({ success: false, message: 'Server error during registration.' });
  }
};


// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

<<<<<<< HEAD
    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Incorrect password.' });
    }
=======
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Incorrect password.' });
>>>>>>> b0ea0ff1b189f4255088ffa5ffb968de59966815

    // Generate token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    // Return token and user info
    return res.status(200).json({
      success: true,
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error('Login Error:', err);
    res.status(500).json({ message: 'Server error during login.' });
  }
};

// @desc    Get profile from token
// @route   GET /api/auth/profile
// @access  Private
const getProfile = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Unauthorized. Token missing.' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password');

    if (!user) return res.status(404).json({ message: 'User not found.' });

    res.json({ user });
  } catch (err) {
    console.error('Profile fetch error:', err);
    return res.status(401).json({ message: 'Invalid token.' });
  }
};

module.exports = {
  register,
  login,
  getProfile,
};
