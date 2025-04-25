'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Questions', [
      // Soal untuk Course ID 1
      {
        text: 'What is 2 + 2?',
        options: JSON.stringify([2, 3, 4, 5]),
        correctIndex: 2, // Pilihan yang benar adalah 4 (index 2)
        courseId: 1, // Menghubungkan ke Course ID 1
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'What is the capital of France?',
        options: JSON.stringify(['Berlin', 'Madrid', 'Paris', 'Rome']),
        correctIndex: 2, // Pilihan yang benar adalah Paris (index 2)
        courseId: 1, // Menghubungkan ke Course ID 1
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'Which of the following is a programming language?',
        options: JSON.stringify(['HTML', 'Python', 'CSS', 'HTTP']),
        correctIndex: 1, // Pilihan yang benar adalah Python (index 1)
        courseId: 1, // Menghubungkan ke Course ID 1
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Soal untuk Course ID 2
      {
        text: 'What does CSS stand for?',
        options: JSON.stringify(['Computer Style Sheets', 'Cascading Style Sheets', 'Creative Style Sheets', 'Central Style Sheets']),
        correctIndex: 1, // Pilihan yang benar adalah Cascading Style Sheets (index 1)
        courseId: 2, // Menghubungkan ke Course ID 2
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'What is the primary purpose of JavaScript?',
        options: JSON.stringify(['Structure web pages', 'Design websites', 'Make web pages interactive', 'Manage database']),
        correctIndex: 2, // Pilihan yang benar adalah Make web pages interactive (index 2)
        courseId: 2, // Menghubungkan ke Course ID 2
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'Which of these is not a programming language?',
        options: JSON.stringify(['Java', 'Python', 'HTML', 'C++']),
        correctIndex: 2, // Pilihan yang benar adalah HTML (index 2)
        courseId: 2, // Menghubungkan ke Course ID 2
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    // Hapus semua soal di tabel Questions
    await queryInterface.bulkDelete('Questions', null, {});
  }
};
