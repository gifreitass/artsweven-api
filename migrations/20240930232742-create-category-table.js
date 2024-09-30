'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('category', {
      name: Sequelize.DataTypes.STRING,
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('category')
  }
};
