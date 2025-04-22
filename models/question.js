module.exports = (sequelize, DataTypes) => {
    const Question = sequelize.define("Question", {
      text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      options: {
        type: DataTypes.JSON, // array of options
        allowNull: false,
      },
      correctIndex: {
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
  
    Question.associate = (models) => {
      Question.belongsTo(models.Course, { foreignKey: 'courseId' });
    };
  
    return Question;
  };
  