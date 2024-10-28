const express = require("express");
const router = express.Router();
const {
  forgotPassword,
  resetPassword,
} = require("../controllers/authController");

router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

module.exports = router;
