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
