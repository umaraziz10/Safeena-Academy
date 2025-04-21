// const express = require('express');
// const router = express.Router();
// const userController = require('../controllers/userController');

// router.get('/', userController.getAllUsers);
// router.get('/:id', userController.getUserById);
// router.post('/', userController.createUser);
// router.delete('/:id', userController.deleteUser);

// module.exports = router;

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const { authorizeRole } = require('../middlewares/authorizeRole');

// GET semua user (admin & teacher)
router.get('/', authMiddleware, authorizeRole(['admin', 'teacher']), userController.getAllUsers);

// GET detail user by id (admin, teacher, student via controller rules)
router.get('/:id', authMiddleware, userController.getUserById);

// POST create user (admin only)
router.post('/', authMiddleware, authorizeRole(['admin']), userController.createUser);

// PUT update user by id (role rules di controller)
router.put('/:id', authMiddleware, userController.updateUser);

// DELETE user by id (role rules di controller)
router.delete('/:id', authMiddleware, userController.deleteUser);

module.exports = router;

