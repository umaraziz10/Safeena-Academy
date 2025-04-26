const express = require('express');
const router = express.Router();

const consultationRoutes = require('./consultationRoutes');
const userRoutes = require('./user');
const authRoutes = require('./authRoutes');
const quizRoutes = require('./quizRoutes');
const courseRoutes = require('./courseRoutes');
const materialsRoutes = require('./materialRoutes');
// const psychologistRoutes = require('./psychologistRoutes');

// Authentication
router.use('/auth', authRoutes);

// Feature routes
router.use('/consultations', consultationRoutes);
router.use('/users', userRoutes);
router.use('/courses', courseRoutes);
router.use('/materials', materialsRoutes);
router.use('/quiz', quizRoutes);
// router.use('/psychologists', psychologistRoutes);

module.exports = router;
