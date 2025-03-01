// backend/pages/auth.js
const express = require("express");
const router = express.Router();

// Import authentication routes
const clientLoginRouter = require("./auth/clientlogin/clientlogin.js");
const lawyerLoginRouter = require("./auth/lawyerlogin/lawyerlogin.js");
const registrationRouter = require("./auth/registration/registration.js");

// Use authentication routes
router.use("/client-login", clientLoginRouter);
router.use("/lawyer-login", lawyerLoginRouter);
router.use("/register", registrationRouter);

module.exports = router;