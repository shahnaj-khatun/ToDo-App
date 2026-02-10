const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const routes = require("./routes/ToDoRoutes")

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected successfully");
  })
  .catch((err) => {
    console.log("❌ MongoDB connection error:", err.message);
  });

  app.use("/api",routes);

// server start
app.listen(PORT, () => {
  console.log(`🚀 Server listening at ${PORT}`);
});






