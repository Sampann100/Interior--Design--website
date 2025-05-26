const mongoose = require("mongoose");

const bagItemSchema = new mongoose.Schema({
  itemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ItemCollection",
    require: true,
    unique: true,
  },
});

module.exports = new mongoose.model("bagItem", bagItemSchema, "bag_Items");
