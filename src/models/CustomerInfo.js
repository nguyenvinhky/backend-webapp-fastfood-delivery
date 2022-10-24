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
    ward_id: DataTypes.INTEGER,
    district_id: DataTypes.INTEGER,
    province_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'CustomerInfo',
  });
  return CustomerInfo;
};