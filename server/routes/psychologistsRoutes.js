const express = require('express');
const router = express.Router();
const psychologistController = require('../controllers/psychologistsController');

router.get('/', psychologistController.getAllPsychologists);
router.get('/:id', psychologistController.getPsychologistById);
router.get('/available-slots', psychologistController.getAvailableSlotsByDate);




module.exports = router;