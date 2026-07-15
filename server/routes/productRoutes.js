const express = require("express");

const router = express.Router();

const protect = require("../middlewares/authMiddleware");
const admin = require("../middlewares/adminMiddleware");
const upload = require("../middlewares/uploadMiddleware");

const {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");



router.post("/test", upload.single("images"), (req, res) => {
  console.log("BODY:", req.body);
  console.log("FILE:", req.file);

  res.json({
    success: true,
    body: req.body,
    file: req.file,
  });
});

// ===============================
// Public Routes
// ===============================

// Get All Products
router.get("/", getProducts);

// Get Single Product
router.get("/:id", getProduct);

// ===============================
// Admin Routes
// ===============================

// Create Product with Images
router.post(
  "/",
  protect,
  admin,
  upload.array("images", 5),
  createProduct
);

// Update Product
router.put("/:id", protect, admin, updateProduct);

// Delete Product
router.delete("/:id", protect, admin, deleteProduct);





module.exports = router;