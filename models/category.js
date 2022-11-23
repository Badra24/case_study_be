"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Category.hasOne(models.Asset, { foreignKey: "asset_id" });
    }
  }
  Category.init(
    {
      category_name: DataTypes.STRING,
      category_slug: DataTypes.STRING,
      asset_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};
