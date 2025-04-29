'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PsychologistTimeSlot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PsychologistTimeSlot.belongsTo(models.Psychologist, {
        foreignKey: 'psychologist_id',
        as: 'Psychologist'
      });
      PsychologistTimeSlot.belongsTo(models.TimeSlot, {
        foreignKey: 'time_slot_id',
        as: 'TimeSlot'
      });
    }
    
  }
  PsychologistTimeSlot.init({
    psychologist_id: DataTypes.INTEGER,
    time_slot_id: DataTypes.INTEGER,
    day: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PsychologistTimeSlot',
  });
  return PsychologistTimeSlot;
};