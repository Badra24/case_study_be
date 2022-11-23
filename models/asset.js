"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Asset extends Model {
    static associate(models) {
      Asset.belongsToMany(models.Product, {
        through: models.Product_Asset,
        foreignKey: "asset_id",
      });
      // Asset.hasOne(models.Category)
    }
  }
  Asset.init(
    {
      name: DataTypes.STRING,
      path: DataTypes.STRING,
      size: DataTypes.STRING,
      asset_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Asset",
    }
  );
  return Asset;
};
