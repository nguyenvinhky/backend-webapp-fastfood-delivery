'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Food extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Food.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    images: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    is_active: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Food',
  });
  return Food;
};