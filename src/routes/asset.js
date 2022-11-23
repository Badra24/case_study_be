const express = require("express");
const router = express.Router();
const fileUploader = require("../lib/uploader");
const { assetController } = require("../controller");

router.post(
  "/create",
  fileUploader({
    destinationFolder: "product_images",
    fileType: "image",
    prefix: "POST",
  }).single("path"),
  assetController.createAsset
);

router.get("/", assetController.getAsset);
router.delete("/delete/:id", assetController.deleteAsset);

module.exports = router;
