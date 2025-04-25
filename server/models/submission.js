module.exports = (sequelize, DataTypes) => {
    const Submission = sequelize.define("Submission", {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      answers: {
        type: DataTypes.JSON, // array jawaban yang dipilih siswa
        allowNull: false,
      },
      score: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Courses',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    });
  
    Submission.associate = (models) => {
      Submission.belongsTo(models.Course, { foreignKey: 'courseId' });
      Submission.belongsTo(models.User, { foreignKey: 'userId' });
    };
  
    return Submission;
  };
  