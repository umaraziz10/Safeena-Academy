const express = require("express");
const router = express.Router();
const quizController = require("../controllers/quizController");

// Mengambil soal berdasarkan courseId
router.get("/:courseId", quizController.getQuestions);

// Mengirim submission ujian
router.post("/submit", quizController.submitExam);

module.exports = router;
