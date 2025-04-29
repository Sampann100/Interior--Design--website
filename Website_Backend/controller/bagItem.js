const { json } = require("body-parser");
const ItemCollection = require("../models/items");
const bagItem = require("../models/bagItem");

exports.postBagItem = async (req, res, next) => {
  const { itemId } = req.body;
  const itemExist = ItemCollection.findById(itemId);
  if (!itemExist) {
    return res.status(404).json({ message: "Item does not exist." });
  }
  const productId = await new bagItem({ itemId: itemId });
  if (!productId) {
    return res.status(404).json({ messgae: "Item not found" });
  }
  productId
    .save()
    .then(() =>
      res.status(200).json({ message: "Item added to bag successfully" })
    )
    .catch((err) => res.status(404).json({ message: "Item not added to bag" }));
};

exports.getBagItem = async (req, res, next) => {
  const bagItems = await bagItem.find().populate("itemId");
  if (!bagItems) {
    return res.status(404).json({ message: "Bag is empty" });
  }
  res.status(200).json(bagItems);
};

exports.deleteBagItem = async (req, res, next) => {
  const { itemId } = req.body;

  await bagItem
    .findOneAndDelete({ itemId: itemId })
    .then((itemdelete) => {
      if (!itemdelete) {
        return res.status(404).json({ message: "Item not found" });
      }
      res.json({ message: "Item deleted successfully" });
    })
    .catch((err) => res.status(404).json({ message: "Item not deleted" }));
};
