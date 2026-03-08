require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import Routes
const authRoute = require("./Router/AuthRouter");
const GoalRouter = require("./Router/GoalRouter");

// Error Middleware
const errormiddleware = require("./Middlewares/errormiddleware");

// Environment variables
const PORT = process.env.PORT || 8000;
const Mongo_Url = process.env.MONGO_URL;

// MongoDB Connection
mongoose
  .connect(Mongo_Url)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.log("❌ MongoDB Connection Error:", err);
  });

// Routes
app.use("/", authRoute);
app.use("/goal", GoalRouter);

// Error handler
app.use(errormiddleware);

// Server Start
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
