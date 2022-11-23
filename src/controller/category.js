const { Category, Asset } = require("../lib/sequelize");

const categoryController = {
  getCategory: async (req, res) => {
    try {
      let findCategory = await Category.findAll({
        include: [Asset],
      });
      res.status(200).json({
        status: "success",
        message: "findCategory ",
        result: findCategory,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.toString(),
      });
    }
  },

  createCategory: async (req, res) => {
    try {
      const { category_name, category_slug, asset_id } = req.body;

      const newCategory = await Category.create({
        category_name,
        category_slug,
        asset_id,
      });

      return res.status(201).json({
        massage: "Asset Create",
        result: newCategory,
      });
    } catch (err) {
      return res.status(500).json({
        massage: "error",
      });
    }
  },
  deleteCategory: async (req, res) => {
    try {
      const { id } = req.params;
      await Category.destroy({
        where: {
          id,
        },
      });
      await Asset.destroy({
        where: {
          id,
        },
      });

      return res.status(200).json({
        message: "Category deleted",
        result: Category,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "Server error",
      });
    }
  },
};

module.exports = categoryController;
