'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Consultation extends Model {
    static associate(models) {
      // Relasi ke User (optional, tambahkan kalau ada model User)
      Consultation.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user'
      });

      // Relasi ke Psychologist
      Consultation.belongsTo(models.Psychologist, {
        foreignKey: 'psychologist_id',
        as: 'psychologist'
      });
    }
  }

  Consultation.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    psychologist_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    type_of_service: {
      type: DataTypes.ENUM('onsite', 'e-counseling', 'home-visit'),
      allowNull: false
    },
    consult_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    consult_time: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Pending'
    }
  }, {
    sequelize,
    modelName: 'Consultation',
    tableName: 'Consultations'
  });

  return Consultation;
};
