const { DataTypes } = require("sequelize");

const category = (sequelize) => {
  return sequelize.define("category", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    category_name: {
      type: DataTypes.STRING,
    },
    category_slug: {
      type: DataTypes.STRING,
    },
  });
};

module.exports = category;
