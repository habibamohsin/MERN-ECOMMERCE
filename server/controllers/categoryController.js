const Category = require("../models/Category");

// ============================
// Create Category
// ============================

const createCategory = async (req, res) => {
  try {
    const { name, image, description } = req.body;

    const categoryExists = await Category.findOne({ name });

    if (categoryExists) {
      return res.status(400).json({
        success: false,
        message: "Category Already Exists",
      });
    }

    const category = await Category.create({
      name,
      image,
      description,
    });

    res.status(201).json({
      success: true,
      message: "Category Created Successfully",
      category,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ============================
// Get All Categories
// ============================

const getCategories = async (req, res) => {
  try {

    const categories = await Category.find();

    res.status(200).json({
      success: true,
      count: categories.length,
      categories,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ============================
// Get Single Category
// ============================

const getCategory = async (req, res) => {

  try {

    const category = await Category.findById(req.params.id);

    if (!category) {

      return res.status(404).json({
        success: false,
        message: "Category Not Found",
      });

    }

    res.status(200).json({
      success: true,
      category,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

// ============================
// Update Category
// ============================

const updateCategory = async (req, res) => {

  try {

    const category = await Category.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!category) {

      return res.status(404).json({
        success: false,
        message: "Category Not Found",
      });

    }

    res.status(200).json({
      success: true,
      message: "Category Updated",
      category,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

// ============================
// Delete Category
// ============================

const deleteCategory = async (req, res) => {

  try {

    const category = await Category.findById(req.params.id);

    if (!category) {

      return res.status(404).json({
        success: false,
        message: "Category Not Found",
      });

    }

    await category.deleteOne();

    res.status(200).json({
      success: true,
      message: "Category Deleted",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

module.exports = {
  createCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory,
};