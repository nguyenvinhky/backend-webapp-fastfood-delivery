'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HasCustomerInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  HasCustomerInfo.init({
    customer_id: DataTypes.INTEGER,
    customer_info_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'HasCustomerInfo',
  });
  return HasCustomerInfo;
};