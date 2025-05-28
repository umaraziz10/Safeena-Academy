const express = require('express');
const router = express.Router();
const materialController = require('../controllers/materialController');
const authMiddleware = require('../middlewares/authMiddleware'); // kalau pakai token
const { authorizeRole } = require('../middlewares/authorizeRole'); // kalau mau role-based

// GET semua materials
router.get('/', authMiddleware, materialController.getAllMaterials);

// GET material by ID
router.get('/:id', authMiddleware, materialController.getMaterialById);

// GET material-> course by ID
router.get('/course/:courseId', authMiddleware, materialController.getMaterialsByCourseId);

// POST create material (Admin & Teacher)
router.post('/', authMiddleware, authorizeRole(['admin', 'teacher']), materialController.createMaterial);

// PATCH /materials/:id/status → update status (tandai user sudah akses)
router.patch('/:id/status', authMiddleware, materialController.updateMaterialStatus);

router.patch('/:id', authMiddleware, materialController.updateMaterial);

// DELETE material (Admin & Teacher)
router.delete('/:id', authMiddleware, authorizeRole(['admin', 'teacher']), materialController.deleteMaterial);

module.exports = router;
