const jwt = require('jsonwebtoken');
require('dotenv').config();

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  // const cookieToken = req.cookies?.token;

  const token = authHeader?.startsWith('Bearer ') ? authHeader.split(' ')[1] :
                // cookieToken?.startsWith('Bearer ') ? cookieToken.split(' ')[1] :
                null;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded token:', decoded);
    req.user = decoded;
    next();
  } catch (error) {
    console.error('Token error:', error);
    return res.status(403).json({ message: 'Invalid token' });
  }
};

module.exports = authMiddleware;