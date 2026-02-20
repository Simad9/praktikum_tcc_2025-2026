const User = require("../models/userModels");

// Ambil Data Semua User
const getAllUsers = async (req, res) => {
  try {
    const allDataUsers = await User.getAllUsers();
    res.status(200).json({
      message: "Users retrieved successfully",
      data: allDataUsers,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving users",
      error: error.message,
    });
  }
};

// Bikin User Baru
const createUser = async (req, res) => {
  const { username, email } = req.body;

  try {
    const newUser = await User.createUser({
      username,
      email,
    });
    res.status(201).json({
      message: "User created successfully",
      data: newUser,
    });
  } catch (error) {
    res.status(400).json({
      message: "Validation error",
      error: error.message,
    });
  }
};

module.exports = {
  getAllUsers,
  createUser,
};
