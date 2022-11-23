const { DataTypes } = require("sequelize");

const Asset = (sequelize) => {
  return sequelize.define("Asset", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
    },
    path: {
      type: DataTypes.STRING,
    },
    size: {
      type: DataTypes.INTEGER,
    },
  });
};

module.exports = Asset;
