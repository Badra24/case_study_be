"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product_Asset extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product_Asset.init(
    {
      product_id: DataTypes.INTEGER,
      asset_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Product_Asset",
    }
  );
  return Product_Asset;
};
