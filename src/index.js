const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config();

const PORT = process.env.PORT;

const { sequelize } = require("./lib/sequelize");
const {
  product_aseetRoutes,
  assetRoutes,
  categoryRoutes,
  productRoutes,
} = require("./routes");

sequelize.sync({ alter: true });

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.use(express.json());

app.use("/product", productRoutes);
app.use("/product_asset", product_aseetRoutes);
app.use("/asset", assetRoutes);
app.use("/category", categoryRoutes);

app.get("/", (req, res) => {
  res.send("API is running");
});

app.listen(PORT, () => {
  console.log("server is running in port " + PORT);
});
