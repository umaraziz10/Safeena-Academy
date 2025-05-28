'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Material extends Model {
    static associate(models) {
      Material.belongsTo(models.Course, {
        foreignKey: 'course_id',
        as: 'course'
      });
    }
  }
  Material.init({
    material_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    course_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    week: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    materials_title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    materials_desc: {
      type: DataTypes.TEXT
    },
    materials_video: {
      type: DataTypes.STRING
    },
    materials_duration: {
      type: DataTypes.INTEGER
    },
    status: {
    type: DataTypes.TEXT, 
    allowNull: false,
    defaultValue: '[]',
    get() {
      const raw = this.getDataValue('status');
      try {
        return JSON.parse(raw || '[]');
      } catch {
        return [];
      }
    },
    set(value) {
      this.setDataValue('status', JSON.stringify(value));
    }
  }

  }, {
    sequelize,
    modelName: 'Material',
    tableName: 'Materials',
    timestamps: true
  });
  return Material;
};