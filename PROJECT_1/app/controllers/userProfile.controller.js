const UserProfile = require("../models/userProfile");

const UserProfile = require("../models/userProfile");

const createProfile = async (req, res) => {
  const { userId, fullName, age, gender, phone, address, bio } = req.body;

  try {
    const existingProfile = await UserProfile.findOne({ userId });
    if (existingProfile) {
      return res
        .status(400)
        .json({ status: false, message: "Profile already exists" });
    }

    const newProfile = await UserProfile.create({
      userId,
      fullName,
      age,
      gender,
      phone,
      address,
      bio,
    });

    return res.status(201).json({
      status: true,
      message: "Profile created successfully",
      profile: newProfile,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ status: false, message: "Internal server error" });
  }
};

const getProfile = async (req, res) => {
  const { userId } = req.query;
  try {
    const profile = await UserProfile.findOne({ userId });
    if (!profile)
      return res.status(404).json({
        status: false,
        message: "Profile not found",
      });

    return res.status(200).json({
      status: true,
      message: "Profile fetched",
      profile,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ status: false, message: "Internal server error" });
  }
};

const updateProfile = async (req, res) => {
  const { userId } = req.query;
  try {
    const updatedProfile = await UserProfile.findOneAndUpdate(
      { userId },
      req.body,
      { new: true }
    );
    if (!updatedProfile) {
      return res.status(404).json({
        status: true,
        message: "Profile not found, please create a profile.",
        profile: updatedProfile,
      });
    }
    return res.status(200).json({
      status: true,
      message: "Profile updated",
      profile: updatedProfile,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ status: false, message: "Internal server error" });
  }
};

const deleteProfile = async (req, res) => {
  const { userId } = req.query;
  try {
    const deletedProfile = await UserProfile.findOneAndDelete({ userId });
    if (!deletedProfile)
      return res.status(404).json({
        status: false,
        message: "Profile not found",
      });

    return res.status(200).json({
      status: true,
      message: "Profile deleted",
    });
  } catch (err) {
    return res
      .status(500)
      .json({ status: false, message: "Internal server error" });
  }
};

module.exports = {
  createProfile,
  getProfile,
  updateProfile,
  deleteProfile,
};
