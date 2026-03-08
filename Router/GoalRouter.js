const express = require("express");
const router = express.Router();
const { createGoal, getAllGoals, updateGoal, deleteGoal } = require("../Controllers/GoalController");
const authmiddleware = require("../Middlewares/authmiddleware");

// All routes below require auth token
router.use(authmiddleware);

// POST   /goal/create  → Create a goal  (body: { "title": "..." })
router.post("/create", createGoal);

// GET    /goal         → Get all goals
router.get("/", getAllGoals);

// PUT    /goal/:id     → Update goal    (body: { "completed": "true" })
router.put("/:id", updateGoal);

// DELETE /goal/:id     → Delete goal
router.delete("/:id", deleteGoal);

module.exports = router;
