const express = require("express");
const {
  signIn,
  signUp,
  resetPassword,
  forgotPassword,
} = require("../../controllers/auth.controller");

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

module.exports = router;