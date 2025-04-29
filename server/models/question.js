module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define("Question", {
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    options: {
      type: DataTypes.JSON, // Array opsi jawaban
      allowNull: false,
    },
    correctIndex: {
      type: DataTypes.INTEGER,  // Menyimpan index jawaban yang benar
      allowNull: false,
    },
    quizId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Quiz',  // Menghubungkan ke model Quiz
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
  });

  Question.associate = (models) => {
    // Setiap soal terkait dengan satu quiz
    Question.belongsTo(models.Quiz, { foreignKey: 'quizId' });
  };

  return Question;
};
