const { hashPassword, comparePasswords } = require("../config/bcrypt");
const { generateJwt } = require("../config/jwt");
const User = require("../models/user.model");
const signUp = async (req, res) => {
  const { firstName, lastName, email, password, profilePic, confirmPassword } =
    req.body;
  try {
    if (
      !firstName ||
      firstName.trim() !== "" ||
      !lastName ||
      lastName.trim() !== "" ||
      !email ||
      email.trim() !== "" ||
      !password ||
      password.trim() !== "" ||
      !profilePic ||
      profilePic.trim() !== "" ||
      !confirmPassword ||
      confirmPassword.trim() !== ""
    ) {
      return res.status(400).json({
        status: false,
        message: "invalid body",
      });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({
        status: false,
        message: "password does not match ",
      });
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        status: false,
        message: "email is taken",
      });
    }
    const encryptedPassword = await hashPassword(password);
    const userData = await User.create({
      firstName,
      lastName,
      email,
      password: encryptedPassword,
      profilePic,
      isActive: false,
    });
    return res.status(200).json({
      status: true,
      message: "user fetch successfully",
      user: userData,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "internal server error",
    });
  }
};

const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || email.trim() !== "" || !password || password.trim() !== "") {
      return res.status(400).json({
        status: false,
        message: "invalid body",
      });
    }
    const userExists = await User.findOne({ email });
    if (!userExists) {
      return res.status(400).json({
        status: false,
        message: "invalid credentials",
      });
    }
    if (!userExists.isActive) {
      return res.status(400).json({
        status: false,
        message: "your account is not activated, please activate your account",
      });
    }
    if (password !== userExists.password) {
      return res.status(400).json({
        status: false,
        message: "invalid credentials",
      });
    }

    const isPasswordMatch = await comparePasswords(
      password,
      userExists.password
    );
    if (!isPasswordMatch) {
      return res.status(400).json({
        status: false,
        message: "invalid credentials",
      });
    }
    const token = generateJwt({ id: userExists._id});
    return res.status(200).json({
      status: true,
      message: "login successfull",
      user: userExists,
      token
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "internal server error",
    });
  }
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    // Validate email
    if (!email || email.trim() === "") {
      return res.status(400).json({
        status: false,
        message: "Email is required",
      });
    }
    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        status: false,
        message: "User not found",
      });
    }
    return res.status(200).json({
      status: true,
      message: "email has been sent",
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "internal server error",
    });
  }
};
const resetPassword = async (req, res) => {
  const { password, confirmPassword } = req.body;
  const { userId } = req.query;
  try {
    // Validate email
    if (
      !password ||
      password.trim() === "" ||
      !confirmPassword ||
      confirmPassword.trim() === ""
    ) {
      return res.status(400).json({
        status: false,
        message: "invalid body",
      });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({
        status: false,
        message: "password does not match ",
      });
    }
    // Find user
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(400).json({
        status: false,
        message: "User not found",
      });
    }
    const encryptedPassword = await hashPassword(password);
    const userData = await User.updateOne(
      { _id: userId },
      { $set: { password: encryptedPassword } }
    );
    return res.status(200).json({
      status: true,
      message: "User password has been reset",
      user: userData,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "internal server error",
    });
  }
};

module.exports = { signIn, signUp, forgotPassword, resetPassword };
