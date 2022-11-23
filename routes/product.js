const express = require("express");
const router = express.Router();

const ProductController = require("../controller/product");

router.get("/", ProductController.getProduct);

router.post("/create", ProductController.createProduct);

router.delete("/:id", ProductController.deleteProduct);

module.exports = router;
