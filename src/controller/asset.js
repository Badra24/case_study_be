const { Asset, Category, Product, Product_asset } = require("../lib/sequelize");

const AssetController = {
  getAsset: async (req, res) => {
    try {
      let findAsset = await Asset.findAll({
        include: [Category, Product, Product_asset],
      });
      res
        .status(200)
        .json({ status: "success", message: "findAsset ", result: findAsset });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.toString(),
      });
    }
  },

  createAsset: async (req, res) => {
    try {
      const { name, size, asset_id } = req.body;
      const uploadFileDomain = process.env.UPLOAD_FILE_DOMAIN;
      const filePath = "product_images";
      const { filename } = req.file;
      console.log("safsafasfaf");
      console.log(req.file);

      const newAsset = await Asset.create({
        path: `${uploadFileDomain}/${filePath}/${filename}`,
        name,
        size,
      });

      return res.status(201).json({
        massage: "Asset Create",
        result: newAsset,
      });
    } catch (err) {
      return res.status(500).json({
        massage: "error",
      });
    }
  },
  deleteAsset: async (req, res) => {
    try {
      const { id } = req.params;
      await Asset.destroy({
        where: {
          id,
        },
      });
      await Category.destroy({
        where: {
          id,
        },
      });

      return res.status(200).json({
        message: "Asset deleted",
        result: Asset,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "Server error",
      });
    }
  },
};

module.exports = AssetController;
