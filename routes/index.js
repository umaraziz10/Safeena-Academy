const express = require('express');
const router = express.Router();
const consultationRoutes = require('./consultationRoutes');
const userRoutes = require('./user');
const authRoutes = require('./authRoutes');
// const psychologistRoutes = require('./psychologistRoutes');
const courseRoutes = require('./courseRoutes');
const materialsRoutes = require('./materialRoutes');

// router.use('/psychologists', psychologistRoutes);
router.use('/auth', authRoutes);
router.use('/consultations', consultationRoutes);
router.use('/users', userRoutes);
router.use('/courses', courseRoutes);
router.use('/materials', materialsRoutes);

module.exports = router;