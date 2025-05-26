const ItemCollection = require("../models/items");

exports.getaddItems = async (req, res, next) => {
  try {
    const data = await ItemCollection.find({}, { items: 0 });
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.postaddItems = async (req, res) => {
  const { itemName, imageUrl, description, original_price, current_price } =
    req.body;  

  const newItem = new ItemCollection({
    itemName,
    imageUrl,
    description,
    original_price,
    current_price,
  });
  await newItem
    .save()
    .then(() =>
      res
        .status(200)
        .json({ message: "Item added successfully" })
    )
    .catch((err) => console.log("Error occur in adding item: ", err));
};

exports.postDeleteItem = (req, res, next) => {
  const { itemId } = req.body;
  ItemCollection.findByIdAndDelete(itemId)
    .then(() => res.status(200).json({ message: "Item deleted successfully" }))
    .catch((err) => console.log("Error occur in deleting item: ", err));
};
