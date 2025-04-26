const express = require('express');
const router = express.Router();
const psychologistController = require('../controllers/psychologistController');

router.get('/', psychologistController.getAllPsychologists);
router.get('/:id', psychologistController.getPsychologistById);
router.get('/:id/available-slots', psychologistController.getAvailableSlots);



module.exports = router;