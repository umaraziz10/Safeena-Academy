const express = require('express');
const router = express.Router();
const consultationRoutes = require('./consultationRoutes');
const userRoutes = require('./user');
const authRoutes = require('./authRoutes');


router.use('/auth', authRoutes);
router.use('/consultations', consultationRoutes);
router.use('/users', userRoutes);

module.exports = router;