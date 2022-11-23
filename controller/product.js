const { Product, Asset } = require("../models");

class ProductController {
  static async getProduct(req, res) {
    try {
      let findProduct = await Product.findAll({
        include: [Asset],
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
  }

  static async createProduct(req, res) {
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
  }
  static async deleteProduct(req, res) {
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
  }
}

module.exports = ProductController;
