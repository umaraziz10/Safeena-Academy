const express = require('express');
const router = express.Router();

const consultationRoutes = require('./consultationRoutes');
const userRoutes = require('./user');
const authRoutes = require('./authRoutes');
const quizRoutes = require('./quizRoutes');
const courseRoutes = require('./courseRoutes');
const materialsRoutes = require('./materialRoutes');
<<<<<<< HEAD
const psychologistRoutes = require('./psychologistsRoutes.js');
=======
// const psychologistRoutes = require('./psychologistRoutes');
>>>>>>> Chatbot-ConsumeAPI

// Authentication
router.use('/auth', authRoutes);

// Feature routes
router.use('/consultations', consultationRoutes);
router.use('/users', userRoutes);
router.use('/courses', courseRoutes);
router.use('/materials', materialsRoutes);
router.use('/quiz', quizRoutes);
<<<<<<< HEAD
router.use('/psychologists', psychologistRoutes);
=======
// router.use('/psychologists', psychologistRoutes);
>>>>>>> Chatbot-ConsumeAPI

module.exports = router;
