'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Bill.init({
    customer_id: DataTypes.INTEGER,
    cart_id: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
    is_paid: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Bill',
  });
  return Bill;
};