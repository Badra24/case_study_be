const { Sequelize } = require("sequelize");
const dbConfig = require("../configs/database");

const sequelize = new Sequelize({
  username: dbConfig.MYSQL_USERNAME,
  password: dbConfig.MYSQL_PASSWORD,
  database: dbConfig.MYSQL_DB_NAME,
  port: dbConfig.MYSQL_PORT,
  dialect: "mysql",
});

//models
const Product = require("../models/product")(sequelize);
const Asset = require("../models/aseet")(sequelize);
const Category = require("../models/category")(sequelize);
const Product_asset = require("../models/product_asset")(sequelize);

// 1 : M
Category.hasOne(Asset, { foreignKey: "asset_id" });
Asset.hasMany(Category, { foreignKey: "asset_id" });

Product.hasMany(Product_asset, { foreignKey: "product_id" });
Product_asset.belongsTo(Product, { foreignKey: "product_id" });
Asset.hasMany(Product_asset, { foreignKey: "asset_id" });
Product_asset.belongsTo(Asset, { foreignKey: "asset_id" });

Product.belongsToMany(Asset, {
  through: Product_asset,
  foreignKey: "product_id",
});

Asset.belongsToMany(Product, {
  through: Product_asset,
  foreignKey: "asset_id",
});

module.exports = {
  sequelize,
  Product,
  Asset,
  Product_asset,
  Category,
};
