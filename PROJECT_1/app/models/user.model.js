const mongoose = require("mongoose");
const userSchema = new mongoose.schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true },
    password: { type: String, required: true },
    profilePic: { type: String, required: true },
    isActive: { type: Boolean, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("user", userSchema);
