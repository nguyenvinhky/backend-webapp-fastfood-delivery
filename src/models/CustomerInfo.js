'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CustomerInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  CustomerInfo.init({
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    wardId: DataTypes.INTEGER,
    districtId: DataTypes.INTEGER,
    provinceId: DataTypes.INTEGER,
    customerId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'CustomerInfo',
  });
  return CustomerInfo;
};