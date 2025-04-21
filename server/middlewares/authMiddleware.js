const { verifyToken } = require('../helpers/jwt');

function authenticate(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token is required' });
  }

  try {
    const token = authorization.split(' ')[1];
    const payload = verifyToken(token);
    req.user = payload;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
}

module.exports = { authenticate };
