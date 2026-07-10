const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const categoryRoutes = require("./routes/categoryRoutes");
const authRoutes = require("./routes/authRoutes");
const brandRoutes = require("./routes/brandRoutes");
const productRoutes = require("./routes/productRoutes");
const errorMiddleware = require("./middlewares/errorMiddleware");
const app = express();

app.use(cors());

app.use(express.json());

app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("API Working Fine");
});

app.use("/api/auth", authRoutes);

app.use("/api/categories", categoryRoutes);
app.use("/api/brands", brandRoutes);
app.use("/api/products", productRoutes);
app.use(errorMiddleware);
module.exports = app;