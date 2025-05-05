const db = require("../models");

// Mengambil soal dan durasi berdasarkan quizId
exports.getQuestions = async (req, res) => {
  const { quizId } = req.params;  // Mengambil quizId dari URL parameter

  try {
    // Ambil durasi kuis berdasarkan quizId
    const quiz = await db.Quiz.findOne({
      where: { id: quizId },
      attributes: ['duration'],  // Ambil durasi saja
    });

    // Pastikan kuis ditemukan
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found." });
    }

    // Ambil soal berdasarkan quizId
    const questions = await db.Question.findAll({
      where: { quizId },
      attributes: ['id', 'text', 'correctIndex', 'options'],  // Ambil kolom soal yang diperlukan
    });

    // Pastikan ada soal untuk quizId yang diberikan
    if (!questions || questions.length === 0) {
      return res.status(404).json({ message: "No questions found for this quiz." });
    }

    // Kembalikan soal dan durasi dalam response
    res.json({
      message: "Questions retrieved successfully",
      quizDuration: quiz.duration,  // Mengirimkan durasi kuis
      questions: questions,         // Mengirimkan soal yang ditemukan
    });
=======
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
>>>>>>> Chatbot-ConsumeAPI
  } catch (error) {
    console.error(error);  // Menambahkan log untuk melihat error lebih detail
    res.status(500).json({ message: "Internal server error" });
  }
};

<<<<<<< HEAD

// Menyimpan submission siswa
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
      attributes: ['id', 'text', 'correctIndex', 'options'],  // Kolom yang sesuai
    });

    // Pastikan ada soal untuk quizId yang diberikan
    if (!questions || questions.length === 0) {
      return res.status(404).json({ message: "No questions found for this quiz." });
    }

    // Validasi panjang answers, pastikan jumlah jawaban sama dengan jumlah soal
    if (answers.length !== questions.length) {
      return res.status(400).json({ message: "The number of answers does not match the number of questions." });
=======
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
>>>>>>> Chatbot-ConsumeAPI
    }

    // Hitung nilai berdasarkan jawaban siswa
    let score = 0;
    questions.forEach((question, idx) => {
      console.log(`Question ${question.text}, Correct Index: ${question.correctIndex}, User Answer: ${answers[idx]}`);
      
      // Perbandingan jawaban siswa dengan correctIndex
=======
>>>>>>> Chatbot-ConsumeAPI
      if (question.correctIndex === answers[idx]) {
        score += 10;
      }
    });

    // Simpan submission ke dalam database
<<<<<<< HEAD
    await db.Submission.create({ userId, answers, score, quizId });

    // Kembalikan response dengan skor
    res.json({ message: "Exam Submitted", score });
  } catch (error) {
    console.error(error);  // Menambahkan log untuk melihat detail error
=======
    await db.Submission.create({ userId, answers, score, courseId });

    res.json({ message: "Exam Submitted", score });
  } catch (error) {
    console.error(error);
>>>>>>> Chatbot-ConsumeAPI
    res.status(500).json({ message: "Internal server error" });
  }
};
