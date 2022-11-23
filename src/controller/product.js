const { Product, Asset } = require("../lib/sequelize");

const ProductController = {
  getProduct: async (req, res) => {
    try {
      let findProduct = await Product.findAll({
        include: [
          {
            model: Asset,
          },
        ],
      });
      res.status(200).json({
        status: "success",
        message: "findProductt ",
        result: findProduct,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.toString(),
      });
    }
  },

  createProduct: async (req, res) => {
    try {
      const { product_name, product_slug, price, descripton } = req.body;

      const newProduct = await Product.create({
        price,
        product_name,
        product_slug,
        descripton,
      });

      return res.status(201).json({
        massage: "Product Create",
        result: newProduct,
      });
    } catch (err) {
      return res.status(500).json({
        massage: "error",
      });
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const { id } = req.params;
      await Product.destroy({
        where: {
          id,
        },
      });

      return res.status(200).json({
        message: "Product deleted",
        result: Product,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "Server error",
      });
    }
  },
};

module.exports = ProductController;
