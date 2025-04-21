const mongoose = require('mongoose');

const userProfileSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
    },
    fullName: { type: String },
    age: { type: Number },
    gender: { type: String, enum: ["male", "female", "other"] },
    phone: { type: String },
    address: { type: String },
    bio: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('UserProfile', userProfileSchema);
