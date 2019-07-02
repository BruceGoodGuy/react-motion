// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const User = sequelize.define('User', {
//     firstName: DataTypes.STRING,
//     lastName: DataTypes.STRING,
//     email: DataTypes.STRING,
//     roleId: DataTypes.Integer,
    
//   }, {});
//   User.associate = function(models) {
//     // associations can be defined here
//   };
//   return User;
// };
const Sequelize = require('sequelize');
var {sequelize} = require('./db');
const User = sequelize.define('User', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  password: Sequelize.STRING,
  email: Sequelize.STRING,
  roleId: Sequelize.INTEGER,
}, {});

let getUserByEmail = (email, result) => {
  User.findOne({where: {email: email}}).then(data => {
    result(null, data);
  })
}

module.exports = {
  getUserByEmail
}