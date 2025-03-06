const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  items: [
    {
      id: String,
      imageUrl: String,
      description: String,
      original_price: Number,
      current_price: Number,
    },
  ],
});

const ItemCollection = mongoose.model("ItemCollection", itemSchema, "Interior_Item");

module.exports = ItemCollection;