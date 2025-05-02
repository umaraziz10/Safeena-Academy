const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const psychologistController = require('../controllers/psychologistsController');

router.get('/', psychologistController.getAllPsychologists);
router.get('/:id', psychologistController.getPsychologistById);
router.get('/available-slots', psychologistController.getAvailableSlotsByDate);

=======
const psychologistController = require('../controllers/psychologistController');

router.get('/', psychologistController.getAllPsychologists);
router.get('/:id', psychologistController.getPsychologistById);
router.get('/:id/available-slots', psychologistController.getAvailableSlots);
>>>>>>> Chatbot-ConsumeAPI



module.exports = router;