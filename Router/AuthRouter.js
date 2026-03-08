const express = require("express");
const router = express.Router();
const { signup, login } = require("../Controllers/AuthController");

// POST /signup
router.post("/signup", signup);

// POST /login
router.post("/login", login);

module.exports = router;
