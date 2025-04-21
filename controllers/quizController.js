const db = require("../models");

// Mengambil soal berdasarkan courseId
exports.getQuestions = async (req, res) => {
  const { courseId } = req.params;

  try {
    const questions = await db.Question.findAll({
      where: { courseId },
    });

    if (!questions || questions.length === 0) {
      return res.status(404).json({ message: "No questions found for this course." });
    }

    res.json(questions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Menyimpan submission siswa
exports.submitExam = async (req, res) => {
  const { userId, answers, courseId } = req.body;

  try {
    // Ambil soal berdasarkan courseId
    const questions = await db.Question.findAll({
      where: { courseId },
    });

    // Pastikan ada soal untuk courseId yang diberikan
    if (!questions || questions.length === 0) {
      return res.status(404).json({ message: "No questions found for this course." });
    }

    // Hitung nilai berdasarkan jawaban siswa
    let score = 0;
    questions.forEach((question, idx) => {
      if (question.correctIndex === answers[idx]) {
        score += 1;
      }
    });

    // Simpan submission ke dalam database
    await db.Submission.create({ userId, answers, score, courseId });

    res.json({ message: "Exam Submitted", score });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
