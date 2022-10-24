'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OpenTime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  OpenTime.init({
    opening: DataTypes.INTEGER,
    closing: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'OpenTime',
  });
  return OpenTime;
};