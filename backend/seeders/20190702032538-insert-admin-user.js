'use strict';
const bcrypt = require('bcrypt')
var salt = bcrypt.genSaltSync(10)
var hash = bcrypt.hashSync('Kandy-1234', salt)
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
        firstName: 'John',
        lastName: 'Doe',
        email: 'bruce@bruce.com',
        password: hash,
        roleId: 1
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};