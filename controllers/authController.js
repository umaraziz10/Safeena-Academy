const { User } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const sendEmail = require('../helpers/sendEmail');



exports.register = async (req, res) => {
    const { name, email, password, role } = req.body;
  
    try {
      // Cek apakah email sudah terdaftar
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ message: 'Email already registered' });
      }
  
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Simpan user baru
      const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
        role: role || 'student',
        isVerified: false
      });
  
      // Generate token verifikasi
      const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
      // Kirim email verifikasi
      await sendEmail(
        email,
        'Verify your email',
        `Hello,
  
  Thank you for registering at Safeena Academy!
  
  Please click the link below to verify your email:
  
  http://localhost:3000/auth/verify?token=${token}
  
  If you did not register, please ignore this email.
  
  Best regards,
  Safeena Academy Team`
      );
  
      res.status(201).json({ message: 'User registered successfully. Please check your email to verify your account.' });
    } catch (error) {
      console.error('❌ Error in register controller:', error);
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  };
  

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Cari user
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Cek apakah email sudah diverifikasi
    if (!user.isVerified) {
      return res.status(403).json({ message: 'Please verify your email before logging in' });
    }

    // Bandingkan password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });


    res.json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.verifyEmail = async (req, res) => {
    try {
      const { token } = req.query;
  
      // Verifikasi token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
      // Cari user dari token
      const user = await User.findByPk(decoded.id);
      if (!user) return res.status(404).json({ message: 'User not found' });
  
      // Update status isVerified
      user.isVerified = true;
      await user.save();
  
      res.status(200).json({ message: 'Email verified successfully. You can now login.' });
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: 'Invalid or expired token' });
    }
  };

  exports.logout = async (req, res) => {
    try {
      // Karena JWT sifatnya stateless, kita hanya kasih response sukses
      res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  };

  exports.forgotPassword = async (req, res) => {
    const { email } = req.body;
  
    try {
      const user = await User.findOne({ where: { email } });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
      await sendEmail(
        email,
        'Reset Your Password - Safeena Academy',
        `Hello,
  
  We received a request to reset your password.
  
  Please click the link below to reset your password:
  
  http://localhost:3000/auth/reset-password?token=${token}
  
  If you did not request a password reset, please ignore this email.
  
  Best regards,
  Safeena Academy Team`
      );
  
      res.status(200).json({ message: 'Password reset email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error', error: error.message });
    }
    res.status(200).json({ message: 'If this email is registered, a password reset link has been sent.' });
  };
  
  exports.resetPassword = async (req, res) => {
    const { token, newPassword } = req.body;
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
      const user = await User.findByPk(decoded.id);
      if (!user) return res.status(404).json({ message: 'User not found' });
  
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      user.password = hashedPassword;
      await user.save();
  
      res.status(200).json({ message: 'Password has been reset successfully' });
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        return res.status(400).json({ message: 'Token has expired. Please request a new password reset.' });
      }
  
      console.error(error);
      res.status(400).json({ message: 'Invalid or expired token' });
    }
  };
  
  

  exports.resendVerification = async (req, res) => {
    const { email } = req.body;
  
    try {
      const user = await User.findOne({ where: { email } });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      if (user.isVerified) {
        return res.status(400).json({ message: 'Email is already verified' });
      }
  
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
      await sendEmail(
        email,
        'Resend Verification - Safeena Academy',
        `Hello,
  
  We noticed you haven't verified your email yet.
  
  Please click the link below to verify your email:
  
  http://localhost:3000/auth/verify?token=${token}
  
  If you did not register, please ignore this email.
  
  Best regards,
  Safeena Academy Team`
      );
  
      res.status(200).json({ message: 'Verification email resent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  };
  
  
