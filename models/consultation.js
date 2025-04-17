'use strict';
module.exports = (sequelize, DataTypes) => {
  const Consultation = sequelize.define('Consultation', {
    user_id: DataTypes.INTEGER,
    consult_date: DataTypes.DATE,
    status: {
      type: DataTypes.ENUM,
      values: ['Pending', 'Confirmed', 'Completed'],
      defaultValue: 'Pending'
    }
  }, {});

  Consultation.associate = function(models) {
    Consultation.belongsTo(models.User, { foreignKey: 'user_id' });
  };

  return Consultation;
};
