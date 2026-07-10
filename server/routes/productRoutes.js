const express = require("express");

const router = express.Router();
const protect = require("../middlewares/authMiddleware");
const admin = require("../middlewares/adminMiddleware");
const {

createProduct,

getProducts,

getProduct,

updateProduct,

deleteProduct,

} = require("../controllers/productController");

router.post("/", createProduct);

router.get("/", getProducts);

router.get("/:id", getProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);
//ADMIN ROUTES
// Public
router.get("/", getProducts);
router.get("/:id", getProduct);

// Admin Only
router.post("/", protect, admin, createProduct);
router.put("/:id", protect, admin, updateProduct);
router.delete("/:id", protect, admin, deleteProduct);

module.exports = router;