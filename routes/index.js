const express = require('express');
const router = express.Router();
const consultationRoutes = require('./consultationRoutes');
const userRoutes = require('./user');
const authRoutes = require('./authRoutes');
const quizRoutes = require("./quizRoutes");
// const psychologistRoutes = require('./psychologistRoutes');

// router.use('/psychologists', psychologistRoutes);
router.use('/auth', authRoutes);
router.use('/consultations', consultationRoutes);
router.use('/users', userRoutes);
router.use("/quiz", quizRoutes);

module.exports = router;