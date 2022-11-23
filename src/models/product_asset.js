const { DataTypes } = require("sequelize");

const Product_aseet = (sequelize) => {
  return sequelize.define("Product_aseet", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    asset_id: {
      type: DataTypes.INTEGER,
    },
    product_id: {
      type: DataTypes.INTEGER,
    },
  });
};

module.exports = Product_aseet;
