const Goal = require("../Models/Goal");

// POST /goal/create
const createGoal = async (req, res, next) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ success: false, message: "Title is required" });
    }

    const goal = await Goal.create({
      title,
      user: req.userId,
    });

    res.status(200).json({
      success: true,
      data: goal,
    });
  } catch (err) {
    next(err);
  }
};

// GET /goal
const getAllGoals = async (req, res, next) => {
  try {
    const goals = await Goal.find({ user: req.userId }).sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: goals,
    });
  } catch (err) {
    next(err);
  }
};

// PUT /goal/:id  — body: { "completed": "true" }
const updateGoal = async (req, res, next) => {
  try {
    const goal = await Goal.findOne({ _id: req.params.id, user: req.userId });
    if (!goal) {
      return res.status(404).json({ success: false, message: "Goal not found" });
    }

    // Handle completed as string "true"/"false" or boolean
    if (req.body.completed !== undefined) {
      goal.completed = req.body.completed === "true" || req.body.completed === true;
    }
    if (req.body.title) {
      goal.title = req.body.title;
    }

    await goal.save();

    res.status(200).json({
      success: true,
      message: "the goal is completed",
    });
  } catch (err) {
    next(err);
  }
};

// DELETE /goal/:id
const deleteGoal = async (req, res, next) => {
  try {
    const goal = await Goal.findOneAndDelete({ _id: req.params.id, user: req.userId });
    if (!goal) {
      return res.status(404).json({ success: false, message: "Goal not found" });
    }

    res.status(200).json({
      message: "Goal deleted",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { createGoal, getAllGoals, updateGoal, deleteGoal };
