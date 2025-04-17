const express = require('express');
const router = express.Router();
const consultationRoutes = require('./consultationRoutes');

const authRoutes = require('./authRoutes');


router.use('/auth', authRoutes);
router.use('/consultations', consultationRoutes);

module.exports = router;