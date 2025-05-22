const express = require("express");
const router = express.Router();
const quizController = require("../controllers/quizController");  // Pastikan path ini benar

// router untuk mengambl score
router.get("/score", quizController.getScore);

// Route untuk mengirim submission ujian
router.post("/submit", quizController.submitExam);  // Pastikan submitExam ada di controller

// Route untuk mendapatkan soal berdasarkan quizId
router.get("/:quizId", quizController.getQuestions);

// Ambil nilai terbaru
router.get("/score/latest", quizController.getLatestScore);

// Ambil nilai tertinggi
router.get("/score/highest", quizController.getHighestScore);


module.exports = router;