const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllUsers = async () => {
  return await prisma.user.findMany({
    select: {
      id: true,
      username: true,
      email: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

const createUser = async (userData) => {
  return await prisma.user.create({
    data: userData,
  });
};

module.exports = {
  getAllUsers,
  createUser,
};
