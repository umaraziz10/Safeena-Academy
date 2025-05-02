'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TimeSlot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TimeSlot.belongsToMany(models.Psychologist, {
        through: models.PsychologistTimeSlot,
        foreignKey: 'time_slot_id',
        otherKey: 'psychologist_id',
        as: 'psychologists' // alias kebalikannya
      });
      
    }
    
  }
  TimeSlot.init({
    code: DataTypes.STRING,
    start_time: DataTypes.TIME,
    end_time: DataTypes.TIME,
    category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TimeSlot',
  });
  return TimeSlot;
};