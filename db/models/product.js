'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    comments: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
    productUrl: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    creatorName: DataTypes.STRING,
    description: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};