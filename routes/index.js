const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoutes');
const courseRoutes = require('./courseRoutes');

router.use('/auth', authRoutes); // ini yg awal sung
router.use('/', authRoutes);
router.use('/courses', courseRoutes);

module.exports = router;
