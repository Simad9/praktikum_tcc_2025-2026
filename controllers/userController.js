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

const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.getUserById(id);

    res.status(200).json({
      message: "User retrieved successfully",
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      message: "User not found",
      error: error.message,
    });
  }
}

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, email } = req.body;

  try {
    const updatedUser = await User.updateUser(id, {
      username,
      email,
    });

    res.status(200).json({
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    res.status(404).json({
      message: "User not found",
      error: error.message,
    });
  }
}

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await User.deleteUser(id);

    res.status(200).json({
      message: "User deleted successfully",
      data: deletedUser,
    });
  } catch (error) {
    res.status(404).json({
      message: "User not found",
      error: error.message,
    });
  }
}

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
