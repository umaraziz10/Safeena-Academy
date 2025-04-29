const express = require('express');
const router = express.Router();
const materialController = require('../controllers/materialController');
const authMiddleware = require('../middlewares/authMiddleware'); // kalau pakai token
const { authorizeRole } = require('../middlewares/authorizeRole'); // kalau mau role-based

// GET semua materials
router.get('/', authMiddleware, materialController.getAllMaterials);
// router.get('/', materialController.getAllMaterials);


// GET material by ID
router.get('/:id', authMiddleware, materialController.getMaterialById);
// router.get('/:id', materialController.getMaterialById);


// GET material-> course by ID
router.get('/course/:courseId', authMiddleware, materialController.getMaterialsByCourseId);
// router.get('/course/:courseId', materialController.getMaterialsByCourseId);

// POST create material (Admin & Teacher)
router.post('/', authMiddleware, authorizeRole(['admin', 'teacher']), materialController.createMaterial);

// PUT update material (Admin & Teacher)
// router.put('/:id', authMiddleware, authorizeRole(['admin', 'teacher']), materialController.updateMaterial);

router.patch('/:id', authMiddleware, authorizeRole(['admin', 'teacher']), materialController.updateMaterial);

// DELETE material (Admin & Teacher)
router.delete('/:id', authMiddleware, authorizeRole(['admin', 'teacher']), materialController.deleteMaterial);

module.exports = router;
