const getUser = (req, res) => {
  try {
    return res.status(200).json({
      status: true,
      message: "user fetch successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "internal server error",
    });
  }
};

const postUser = (req, res) => {
  try {
    return res.status(200).json({
      status: true,
      message: "user create successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "internal server error",
    });
  }
};

const deleteUser = (req, res) => {
  try {
    return res.status(200).json({
      status: true,
      message: "user delete successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "internal server error",
    });
  }
};

const updateUser = (req, res) => {
  try {
    return res.status(200).json({
      status: true,
      message: "user update successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "internal server error",
    });
  }
};

const getAllUser = (req, res) => {
  try {
    return res.status(200).json({
      status: true,
      message: "all user fetch successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "internal server error",
    });
  }
};

module.exports = {
  getUser,
  postUser,
  deleteUser,
  updateUser,
  getAllUser,
};
