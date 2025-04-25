const express = require('express');
const router = express.Router();
const consultationController = require('../controllers/consultationController');
const authMiddleware = require('../middlewares/authMiddleware');
const validate = require('../middlewares/validateConsultation');

router.post(
  '/',
  authMiddleware,
  ...validate.validateCreateConsultation, // ✅ spread array function
  consultationController.createConsultation
);

router.patch(
  '/:id/status',
  authMiddleware,
  ...validate.validateUpdateStatus, // ✅ spread juga
  consultationController.updateConsultationStatus
);

router.get('/', authMiddleware, consultationController.getAllConsultations);
router.get('/:id', authMiddleware, consultationController.getConsultationById);
router.delete('/:id', authMiddleware, consultationController.deleteConsultation);

module.exports = router;
