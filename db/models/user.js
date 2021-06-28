'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    profileImg: DataTypes.STRING,
    bio: DataTypes.TEXT
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Product, {
      foreignKey: 'userId'
    })
    User.hasMany(models.Comment, {
      foreignKey: 'userId'
    })
  };
  return User;
};
