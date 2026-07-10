const Brand = require("../models/Brand");

// ==========================
// Create Brand
// ==========================
const createBrand = async (req, res) => {
  try {
    const { name, logo } = req.body;

    const brandExists = await Brand.findOne({ name });

    if (brandExists) {
      return res.status(400).json({
        success: false,
        message: "Brand already exists",
      });
    }

    const brand = await Brand.create({
      name,
      logo,
    });

    res.status(201).json({
      success: true,
      message: "Brand Created Successfully",
      brand,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Get All Brands
// ==========================
const getBrands = async (req, res) => {
  try {
    const brands = await Brand.find();

    res.status(200).json({
      success: true,
      count: brands.length,
      brands,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Get Single Brand
// ==========================
const getBrand = async (req, res) => {
  try {
    const brand = await Brand.findById(req.params.id);

    if (!brand) {
      return res.status(404).json({
        success: false,
        message: "Brand Not Found",
      });
    }

    res.status(200).json({
      success: true,
      brand,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Update Brand
// ==========================
const updateBrand = async (req, res) => {
  try {
    const brand = await Brand.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!brand) {
      return res.status(404).json({
        success: false,
        message: "Brand Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Brand Updated Successfully",
      brand,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Delete Brand
// ==========================
const deleteBrand = async (req, res) => {
  try {
    const brand = await Brand.findById(req.params.id);

    if (!brand) {
      return res.status(404).json({
        success: false,
        message: "Brand Not Found",
      });
    }

    await brand.deleteOne();

    res.status(200).json({
      success: true,
      message: "Brand Deleted Successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createBrand,
  getBrands,
  getBrand,
  updateBrand,
  deleteBrand,
};