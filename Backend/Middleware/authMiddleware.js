const jwt = require('jsonwebtoken');

// ✅ Middleware to verify JWT and attach user info
exports.verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Expect "Bearer <token>"

  if (!token) {
    return res.status(401).json({ message: 'Access denied: No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // user: { id: ..., iat: ..., exp: ... }
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Access denied: Invalid token' });
  }
};

// ✅ Middleware to check admin role
exports.requireAdmin = (req, res, next) => {
  if (req.user?.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied: Admins only' });
  }
  next();
};
