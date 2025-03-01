// backend/pages/auth/lawyerlogin/lawyerlogin.js
const express = require("express");
const router = express.Router();

// In-memory lawyer data
const lawyers = [
  { email: "lawyer@example.com", password: "lawyerpassword" }
];

// Lawyer login endpoint
router.post("/", (req, res) => {
  const { email, password } = req.body;

  const lawyer = lawyers.find(
    (l) => l.email === email && l.password === password
  );

  if (lawyer) {
    res.json({ message: "Lawyer login successful!", lawyer });
  } else {
    res.status(401).json({ message: "Invalid lawyer credentials" });
  }
});

module.exports = router;