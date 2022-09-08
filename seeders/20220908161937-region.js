'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Regions', [
      {
       nombre: 'America',
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       nombre: 'Asia',
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       nombre: 'Europa',
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       nombre: 'Africa',
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
       nombre: 'Oceania',
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
        nombre: 'Antartica',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
