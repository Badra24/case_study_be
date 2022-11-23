const { Product_asset, Product, Asset } = require("../models");

class ProductAssetController {
  static async getProductAsset(req, res) {
    try {
      let findProductAsset = await Product_asset.findAll({
        include: [Asset, Product],
      });
      res.status(200).json({
        status: "success",
        message: "findProductAsset ",
        result: findProductAsset,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.toString(),
      });
    }
  }

  static async createProductAseet(req, res) {
    try {
      const { product_id1, product_id2, asset_id } = req.body;

      const newProductAsset = await Product_asset.bulkCreate([
        { product_id: product_id1, asset_id },
        {
          product_id: product_id2,
          asset_id,
        },
      ]);
      return res.status(200).json({
        message: "new newProduct Asset has been created",
        result: newProductAsset,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.toString(),
      });
    }
  }
}

module.exports = ProductAssetController;
