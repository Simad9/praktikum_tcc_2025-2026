const express = require("express");
const userRoutes = require("./routes/userRoutes");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Best practice: version your APIs
app.use("/api/v1/users", userRoutes);

// Sync Database & Start Server
const port = process.env.PORT || 3000;
prisma.$connect().then(() => {
  console.log("Database connected");
});
app.listen(port, () => console.log(`Server running on port ${port}`));
