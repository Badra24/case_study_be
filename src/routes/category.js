const express = require("express");
const router = express.Router();

const { categoryController } = require("../controller");

router.post("/create", categoryController.createCategory);
router.get("/", categoryController.getCategory);
router.delete("delete/:id", categoryController.deleteCategory);

module.exports = router;
