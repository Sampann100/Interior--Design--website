const express = require("express");
const { signUpPage } = require("../controller/authController/SignUp");
const { loginPage } = require("../controller/authController/Login");

const authRouter = express.Router();

authRouter.post("/signup", signUpPage);
authRouter.post("/login", loginPage);

module.exports = authRouter;
