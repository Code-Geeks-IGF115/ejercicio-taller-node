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
     await queryInterface.bulkInsert('Pais', [
      {
        nombre: 'El Salvador',
        capital:'San Salvador',
        poblacion:6518500,
        idioma:'Español',
        moneda:'Dolar Americano',
        RegionId:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Guatemala',
        capital:'Ciudad de Guatemala',
        poblacion:17400000,
        idioma:'Español',
        moneda:'Quetzal',
        RegionId:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Nicaragua',
        capital:'Managua',
        poblacion:6702379,
        idioma:'Español',
        moneda:'Cordoba',
        RegionId:2,
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
