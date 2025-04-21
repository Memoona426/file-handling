const express = require("express");
const {
  getUser,
  postUser,
  deleteUser,
  updateUser,
  getAllUser,
} = require("../../controllers/user.controller");
const router = express.Router();

router.get("/getUser", getUser);
router.post("/postUser", postUser);
router.delete("/deleteUser", deleteUser);
router.patch("/updateUser", updateUser);
router.get("/getAllUser", getAllUser);

module.exports = router