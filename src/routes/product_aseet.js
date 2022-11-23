const express = require("express");
const router = express.Router();

const { product_aseetController } = require("../controller");

router.post("/cretae", product_aseetController.createProductAseet);
router.get("/", product_aseetController.getProductAsset);

module.exports = router;
