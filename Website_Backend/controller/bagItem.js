const ItemCollection = require("../models/items");
const BagItem = require("../models/bagItem");

exports.postBagItem = async (req, res) => {
  try {
    const { itemId } = req.body;
    const itemExist = await ItemCollection.findById(itemId);
    if (!itemExist) {
      return res.status(404).json({ message: "Item does not exist." });
    }

    const alreadyInBag = await BagItem.findOne({ itemId });
    if (alreadyInBag) {
      return res.status(400).json({ message: "Item already in bag" });
    }

    const newBagItem = new BagItem({ itemId });
    await newBagItem.save();
    res.status(200).json({ message: "Item added to bag successfully" });
  } catch (error) {
    console.error("Error adding to bag:", error);
    res.status(500).json({ message: "Failed to add item to bag" });
  }
};

exports.getBagItem = async (req, res) => {
  try {
    const bagItems = await BagItem.find().populate("itemId");
    res.status(200).json(bagItems);
  } catch (error) {
    console.error("Error fetching bag items:", error);
    res.status(500).json({ message: "Failed to fetch bag items" });
  }
};

exports.deleteBagItem = async (req, res) => {
  try {
    const { itemId } = req.body;
    const itemDeleted = await BagItem.findOneAndDelete({ itemId });

    if (!itemDeleted) {
      return res.status(404).json({ message: "Item not found in bag" });
    }

    res.status(200).json({ message: "Item removed from bag successfully" });
  } catch (error) {
    console.error("Error deleting bag item:", error);
    res.status(500).json({ message: "Failed to delete item from bag" });
  }
};
