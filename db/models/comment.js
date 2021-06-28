'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    productId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    body: DataTypes.TEXT
  }, {});
  Comment.associate = function(models) {
    Comment.belongsTo(models.User, {
      foreignKey: 'userId'
    })
    Comment.belongsTo(models.Product, {
      foreignKey: 'productId'
    })
  };
  return Comment;
};
