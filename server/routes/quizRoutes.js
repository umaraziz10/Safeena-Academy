const express = require("express");
const router = express.Router();
const quizController = require("../controllers/quizController");  // Pastikan path ini benar

// Route untuk mendapatkan soal berdasarkan quizId
router.get("/:quizId", quizController.getQuestions);

// Route untuk mengirim submission ujian
router.post("/submit", quizController.submitExam);  // Pastikan submitExam ada di controller

module.exports = router;
