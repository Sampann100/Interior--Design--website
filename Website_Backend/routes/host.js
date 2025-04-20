<<<<<<< HEAD
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
=======
const express = require("express");
const {
  personalContactDetail,
} = require("../controller/personalContactDetail");
const { chatbot } = require("../controller/chatbot");
const { ImageGeneration } = require("../controller/ImageGeneration");
const {
  postaddItems,
  getaddItems,
  postDeleteItem,
} = require("../controller/addItem");
const {
  getBagItem,
  postBagItem,
  deleteBagItem,
} = require("../controller/bagItem");

const hostRouter = express.Router();

hostRouter.post("/personalContactDetail", personalContactDetail);
hostRouter.post("/chatbot", chatbot);
hostRouter.post("/generate-image", ImageGeneration);

hostRouter.post("/items", postaddItems);
hostRouter.get("/items", getaddItems);

hostRouter.post("/cart", postBagItem);
hostRouter.get("/cart", getBagItem);
hostRouter.post("/deleteCartItem", deleteBagItem);

hostRouter.post("/itemDelete", postDeleteItem);

module.exports = hostRouter;
>>>>>>> 187e5ac (termperory work)
