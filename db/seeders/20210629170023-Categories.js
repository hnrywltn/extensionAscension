'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Categories', [
        { name: 'Format/Linter', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Collaboration/Git', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Styling', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Categories', null, {});
  }
};
