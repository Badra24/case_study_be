"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsToMany(models.Asset, {
        through: models.Product_Asset,
        foreignKey: "product_id",
      });
    }
  }
  Product.init(
    {
      product_name: DataTypes.STRING,
      product_slug: DataTypes.STRING,
      price: DataTypes.INTEGER,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
