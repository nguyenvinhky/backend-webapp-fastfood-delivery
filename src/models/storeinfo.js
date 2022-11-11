'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StoreInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  StoreInfo.init({
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    wardId: DataTypes.INTEGER,
    districtId: DataTypes.INTEGER,
    provinceId: DataTypes.INTEGER,
    businessTypeId: DataTypes.INTEGER,
    storeId: DataTypes.INTEGER,
    cuisineId: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'StoreInfo',
  });
  return StoreInfo;
};