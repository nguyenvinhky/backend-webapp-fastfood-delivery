'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('StoreInfos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      phone: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      wardId: {
        type: Sequelize.INTEGER
      },
      districtId: {
        type: Sequelize.INTEGER
      },
      provinceId: {
        type: Sequelize.INTEGER
      },
      businessTypeId: {
        type: Sequelize.INTEGER
      },
      storeId: {
        type: Sequelize.INTEGER
      },
      cuisineId: {
        type: Sequelize.INTEGER
      },
      statusId: {
        type: Sequelize.INTEGER
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('StoreInfos');
  }
};