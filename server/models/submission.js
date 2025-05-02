module.exports = (sequelize, DataTypes) => {
  const Submission = sequelize.define("Submission", {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',  // Menghubungkan ke tabel Users
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    answers: {
      type: DataTypes.JSON,  // Menyimpan jawaban yang dipilih siswa (array)
      allowNull: false,
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quizId: {  // Menghubungkan dengan quizId
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Quiz',  // Menghubungkan ke tabel Quiz
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
  });

  Submission.associate = (models) => {
    // Relasi antara Submission dan Quiz (1:M)
    Submission.belongsTo(models.Quiz, { foreignKey: 'quizId' });

    // Relasi antara Submission dan User (1:M)
    Submission.belongsTo(models.User, { foreignKey: 'userId' });
  };

  return Submission;
};
