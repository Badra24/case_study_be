const express = require("express");
const router = express.Router();

const { productController } = require("../controller");

router.get("/", productController.getProduct);

router.post("/create", productController.createProduct);

router.delete("/:id", productController.deleteProduct);

module.exports = router;
