const express = require("express");

const router = express.Router();

const protect = require("../middlewares/authMiddleware");

const {
  registerUser,
  loginUser,
  getProfile,
} = require("../controllers/authController");

// Public Routes
router.post("/register", registerUser);

router.post("/login", loginUser);

// Protected Route
router.get("/profile", protect, getProfile);

module.exports = router;