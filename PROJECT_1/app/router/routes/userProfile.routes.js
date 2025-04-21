const express = require("express");
const {
    createProfile,
    getProfile,
    updateProfile,
    deleteProfile,
} = require("../../controllers/userProfile.controller");

const router = express.Router();

router.post("/profile", createProfile);             
router.get("/profile/:id", getProfile);            
router.put("/profile/:id", updateProfile);          
router.delete("/profile/:id", deleteProfile);       

module.exports = router;