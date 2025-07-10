const jwt = require('jsonwebtoken');

// ✅ Middleware to verify JWT and attach user info
const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  // Expecting "Bearer <token>"
  const token = authHeader?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access denied: No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // { id: ..., role: ..., iat: ..., exp: ... }
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Access denied: Invalid token' });
  }
};

// ✅ Middleware to check admin role
const requireAdmin = (req, res, next) => {
  if (req.user?.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied: Admins only' });
  }
  next();
};

module.exports = {
  verifyToken,
  requireAdmin,
};
