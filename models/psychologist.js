'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Psychologist extends Model {
    static associate(models) {
        Psychologist.hasMany(models.Consultation, {
          foreignKey: 'psychologist_id',
          as: 'consultations'
        });
      
        Psychologist.belongsToMany(models.TimeSlot, {
          through: models.PsychologistTimeSlot,
          foreignKey: 'psychologist_id',
          as: 'available_slots'
        });
      }      
  }

  Psychologist.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    handled_count: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location_url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    education_1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    education_2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    service_type: {
      type: DataTypes.TEXT,
      allowNull: false,
      get() {
        const raw = this.getDataValue('service_type');
        return raw ? JSON.parse(raw) : [];
      },
      set(value) {
        this.setDataValue('service_type', JSON.stringify(value));
      }
    }
  }, {
    sequelize,
    modelName: 'Psychologist',
    tableName: 'Psychologists'
  });

  return Psychologist;
};
