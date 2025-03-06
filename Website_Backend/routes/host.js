const express = require("express");
const {
  personalContactDetail
} = require("../controller/personalContactDetail");
const { chatbot } = require("../controller/chatbot");
const { ImageGeneration } = require("../controller/ImageGeneration");
const { addItems } = require("../controller/addItem");

const hostRouter = express.Router();

hostRouter.post("/personalContactDetail", personalContactDetail);
hostRouter.post("/chatbot", chatbot);
hostRouter.post("/generate-image", ImageGeneration);
hostRouter.post("/items", addItems);

module.exports = hostRouter;