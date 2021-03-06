'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    productName: DataTypes.STRING,
    // comments: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
    productUrl: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {});
  Product.associate = function(models) {
    Product.belongsTo(models.Category, {
      foreignKey: 'categoryId'
    })
    Product.belongsTo(models.User, {
      foreignKey: 'userId'
    })
    // Product.hasMany(models.Comment, {
    //   foreignKey: 'productId'
    // })
  };
  return Product;
};
