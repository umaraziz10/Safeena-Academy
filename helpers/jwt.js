// const jwt = require('jsonwebtoken');
// const SECRET_KEY = 'secret123'; // nanti bisa pakai env ya

// function generateToken(payload) {
//   return jwt.sign(payload, SECRET_KEY, { expiresIn: '1d' });
// }

// function verifyToken(token) {
//   return jwt.verify(token, SECRET_KEY);
// }

// module.exports = { generateToken, verifyToken };

const jwt = require('jsonwebtoken');
require('dotenv').config(); // <-- ini penting biar bisa ambil dari .env

const SECRET_KEY = process.env.JWT_SECRET;

function generateToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '1d' });
}

function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY);
}

module.exports = { generateToken, verifyToken };
