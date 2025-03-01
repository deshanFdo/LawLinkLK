// backend/pages/auth/registration/registration.js
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// User schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, enum: ["client", "lawyer"] }, // Role can be "client" or "lawyer"
});

// User model
const User = mongoose.model("User", userSchema);

// Registration endpoint
router.post("/", async (req, res) => {
  const { email, password, role } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user
    const newUser = new User({ email, password, role });
    await newUser.save();

    res.json({ message: "Registration successful!", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
});

module.exports = router;