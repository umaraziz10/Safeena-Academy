const db = require("../models");

// Mengambil soal dan durasi berdasarkan quizId
exports.getQuestions = async (req, res) => {
  const { quizId } = req.params;

  try {
    // Ambil soal berdasarkan quizId
    const questions = await db.Question.findAll({
      where: { quizId },
      attributes: ['id', 'text', 'options', 'correctIndex', 'quizId', 'createdAt', 'updatedAt']  // Perbarui field
    });

    // Ambil durasi dari quiz
    const quiz = await db.Quiz.findOne({
      where: { id: quizId },
      attributes: ['duration'],  // Hanya mengambil durasi quiz
    });

    // Pastikan soal ada untuk quizId yang diberikan
    if (!questions || questions.length === 0) {
      return res.status(404).json({ message: "No questions found for this quiz." });
    }

    // Pastikan quiz ditemukan
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found." });
    }

    // Menambahkan durasi ke response soal
    res.json({
      quizId,
      duration: quiz.duration,  // Menambahkan durasi quiz
      questions
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};


//Menyimpan Submission
exports.submitExam = async (req, res) => {
  const { userId, answers, quizId } = req.body;

  // Validasi input
  if (!userId || !answers || !quizId) {
    return res.status(400).json({ message: "userId, quizId, and answers are required" });
  }

  try {
    // Ambil soal berdasarkan quizId
    const questions = await db.Question.findAll({
      where: { quizId },
      attributes: ['id', 'text', 'correctIndex', 'options']  // Ambil kolom yang diperlukan
    });

    // Pastikan ada soal untuk quizId yang diberikan
    if (!questions || questions.length === 0) {
      return res.status(404).json({ message: "No questions found for this quiz." });
    }

    // Validasi panjang answers, pastikan jumlah jawaban sama dengan jumlah soal
    if (answers.length !== questions.length) {
      return res.status(400).json({ message: "The number of answers does not match the number of questions." });
    }

    // Hitung nilai berdasarkan jawaban siswa
    let score = 0;
    questions.forEach((question, idx) => {
      console.log(`Question ${question.text}, Correct Index: ${question.correctIndex}, User Answer: ${answers[idx]}`);
      
      // Perbandingan jawaban siswa dengan correctIndex
      if (question.correctIndex === answers[idx]) {
        score += 1;
      }
    });

    // Simpan submission ke dalam database
    await db.Submission.create({ userId, answers, score, quizId });

    // Kembalikan response dengan skor
    res.json({ message: "Exam Submitted", score });
  } catch (error) {
    console.error(error);  // Menambahkan log untuk melihat detail error
    res.status(500).json({ message: "Internal server error" });
  }
};
