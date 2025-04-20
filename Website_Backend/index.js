<<<<<<< HEAD
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const hostRouter = require("./routes/host");
const userRouter = require("./routes/user");
const ItemCollection = require("./models/items");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(bodyParser.json({ extended: true }));

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(hostRouter);
app.use(userRouter);

app.get("/items", async (req, res) => {
  try {
    const data = await ItemCollection.findOne({}, "items -_id");
    res.json({items: data?.items || []});
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
=======
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const hostRouter = require("./routes/host");
const userRouter = require("./routes/user");
const ItemCollection = require("./models/items");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(bodyParser.json({ extended: true }));

app.use(hostRouter);
app.use(userRouter);

const PORT = 5000;
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error("MongoDB connection error:", err));
>>>>>>> 187e5ac (termperory work)
