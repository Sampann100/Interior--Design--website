<<<<<<< HEAD
const ItemCollection = require("../models/items");

exports.addItems = async (req, res) => {
  const newItem = req.body;
  console.log(newItem);
  const productId = "67c581322713d2ac10dd40b2";

  const product = await ItemCollection.findById(productId);

  let maxId = 0;
  if (product.items.length > 0) {
    maxId = Math.max(...product.items.map((item) => parseInt(item.id, 10)));
  }
  newItem.id = maxId + 1;
  product.items.push(newItem);

  await product.save();

  res.status(200).json({ message: "Item added successfully", data: product });
};
=======
const ItemCollection = require("../models/items");

exports.getaddItems = async (req, res, next) => {
  try {
    const data = await ItemCollection.find({}, { items: 0 });
    res.json(data);
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
    .then(() => console.log("Item saved successfully!!"))
    .catch((err) => console.log("Error occur in adding item: ", err));

  res.status(200).json({ message: "Item added successfully" });
};

exports.postDeleteItem = (req, res, next) => {
  const { itemId } = req.body;
  ItemCollection.findByIdAndDelete(itemId)
    .then(() => console.log("Item was deleted!!"))
    .catch((err) => console.log("Error occur in deleting item: ", err));
  res.status(200).json({ message: "Item deleted successfully" });
};
>>>>>>> 187e5ac (termperory work)
