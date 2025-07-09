exports.requireAdmin = (req, res, next) => {
  const role = req.headers['role'];
  if (role !== 'admin') return res.status(403).json({ message: 'Access denied' });
  next();
};
