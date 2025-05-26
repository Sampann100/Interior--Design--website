const express = require("express");
const { signUpPage } = require("../controller/authController/SignUp");
const { loginPage } = require("../controller/authController/Login");
const { postItemComment } = require("../controller/itemComment");
const { getaddItems } = require("../controller/addItem");
const { getBagItem } = require("../controller/bagItem");

const userRouter = express.Router();

userRouter.get("/items", getaddItems);
userRouter.get("/cart", getBagItem);

//Comment
userRouter.post("/comment", postItemComment);

module.exports = userRouter;
