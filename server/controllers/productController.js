const Product=require("../models/Product");
const asyncHandler=require("../middlewares/asyncHandler");
const ApiError=require("../utils/ApiError");
// ============================
// Create Product
// ============================

const createProduct = async (req, res) => {
  try {

    const product = await Product.create(req.body);

    res.status(201).json({
      success: true,
      message: "Product Created Successfully",
      product,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ============================
// Get All Products
// ============================

const getProducts = asyncHandler(async (req, res) => {

  const products = await Product.find()
    .populate("category")
    .populate("brand");

  if (!products) {
    throw new ApiError("No Products Found", 404);
  }

  res.status(200).json({
    success: true,
    count: products.length,
    products,
  });

});

// ============================
// Get Single Product
// ============================

const getProduct = async (req, res) => {

  try {

    const product = await Product.findById(req.params.id)
      .populate("category")
      .populate("brand");

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product Not Found",
      });
    }

    res.status(200).json({
      success: true,
      product,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

// ============================
// Update Product
// ============================

const updateProduct = async (req, res) => {

  try {

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product Updated",
      product,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

// ============================
// Delete Product
// ============================

const deleteProduct = async (req, res) => {

  try {

    const product = await Product.findById(req.params.id);

    if (!product) {

      return res.status(404).json({
        success: false,
        message: "Product Not Found",
      });

    }

    await product.deleteOne();

    res.status(200).json({
      success: true,
      message: "Product Deleted",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

module.exports = {

  createProduct,

  getProducts,

  getProduct,

  updateProduct,

  deleteProduct,

};