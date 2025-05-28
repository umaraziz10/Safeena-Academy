module.exports = (sequelize, DataTypes) => {
    const Quiz = sequelize.define("Quiz", {
      courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Courses', // Menghubungkan ke tabel 'Courses'
          key: 'id',
        },
        onDelete: 'CASCADE', // Jika Course dihapus, maka Quiz ini juga dihapus
      },
      duration: {
        type: DataTypes.INTEGER, // durasi dalam detik
        allowNull: false,
      },
    }, {
      tableName: 'Quiz', // Nama tabel yang sesuai di database (singular)
    });
  
    Quiz.associate = (models) => {
      // Setiap quiz menghubungkan ke course (1:1)
      Quiz.belongsTo(models.Course, { foreignKey: 'courseId' });
      // Setiap quiz memiliki banyak soal (1:N)
      Quiz.hasMany(models.Question, { foreignKey: 'quizId' });
    };
  
    return Quiz;
  };
  