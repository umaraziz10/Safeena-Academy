const express = require("express");
const router = express.Router();
<<<<<<< HEAD
const quizController = require("../controllers/quizController");  // Pastikan path ini benar

// Route untuk mendapatkan soal berdasarkan quizId
router.get("/:quizId", quizController.getQuestions);

// Route untuk mengirim submission ujian
router.post("/submit", quizController.submitExam);  // Pastikan submitExam ada di controller

module.exports = router;
=======
const quizController = require("../controllers/quizController");

router.get("/:courseId", quizController.getQuestions);
router.post("/submit", quizController.submitExam);

module.exports = router;
>>>>>>> Chatbot-ConsumeAPI
