'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  //   return queryInterface.bulkInsert('Account', 
  //   [{
  //     username: 'nvky123',
  //     password: '123',
  //     is_active: true,
  //     store_id: 1,
  //     accounttype_id: 1,
  //   },
  //   {
  //     username: 'ntdang123',
  //     password: '321',
  //     is_active: true,
  //     store_id: 1,
  //     accounttype_id: 1,
  //   },
  //   {
  //     username: 'nhnam123',
  //     password: '456',
  //     is_active: false,
  //     store_id: 1,
  //     accounttype_id: 1,
  //   },
  // ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
