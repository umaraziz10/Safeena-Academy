const express = require("express");
const router = express.Router();
const quizController = require("../controllers/quizController");

router.get("/:courseId", quizController.getQuestions);
router.post("/submit", quizController.submitExam);

module.exports = router;