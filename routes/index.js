const express = require('express');
const router = express.Router();

const consultationRoutes = require('./consultationRoutes');
const userRoutes = require('./user');
const authRoutes = require('./authRoutes');
const quizRoutes = require("./quizRoutes");
const courseRoutes = require('./courseRoutes');
// const psychologistRoutes = require('./psychologistRoutes');

// Rute otentikasi
router.use('/auth', authRoutes);

// Rute utama (opsional, tergantung struktur)
router.use('/', authRoutes);

// Rute-rute lainnya
router.use('/courses', courseRoutes);
router.use('/consultations', consultationRoutes);
router.use('/users', userRoutes);
router.use('/quiz', quizRoutes);

// router.use('/psychologists', psychologistRoutes); // uncomment jika dibutuhkan

module.exports = router;
