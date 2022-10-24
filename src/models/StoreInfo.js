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
    ward_id: DataTypes.INTEGER,
    district_id: DataTypes.INTEGER,
    province_id: DataTypes.INTEGER,
    businesstype_id: DataTypes.INTEGER,
    store_id: DataTypes.INTEGER,
    cuisine_id: DataTypes.INTEGER,
    opentime_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'StoreInfo',
  });
  return StoreInfo;
};