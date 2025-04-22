// const jwt = require('jsonwebtoken');

// const authMiddleware = (req, res, next) => {
//   const token = req.headers.authorization?.split(' ')[1];

//   if (!token) {
//     return res.status(401).json({ message: 'No token provided' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded; // simpan data user
//     next();
//   } catch (error) {
//     return res.status(403).json({ message: 'Invalid token' });
//   }
//   console.log('🔐 Token received:', token);
// console.log('🔐 JWT_SECRET used:', process.env.JWT_SECRET);
// };

// module.exports = authMiddleware;

// const jwt = require('jsonwebtoken');
// require('dotenv').config(); // tambahkan ini kalau belum

// const authMiddleware = (req, res, next) => {
//   const token = req.headers.authorization?.split(' ')[1];

//   if (!token) {
//     return res.status(401).json({ message: 'No token provided' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     console.log('✅ Decoded token:', decoded);
//     req.user = decoded;
//     next();
//   } catch (error) {
//     console.error('❌ Token error:', error);
//     return res.status(403).json({ message: 'Invalid token' });
//   }
// };

// module.exports = authMiddleware;

const jwt = require('jsonwebtoken');
require('dotenv').config();

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('✅ Decoded token:', decoded);
    req.user = decoded;
    next();
  } catch (error) {
    console.error('❌ Token error:', error);
    return res.status(403).json({ message: 'Invalid token' });
  }
};

module.exports = authMiddleware;
