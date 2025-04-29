require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const ItemCollection = require("./models/items");

const hostRouter = require("./routes/host");
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");

const app = express();

//Cors middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

//Body parser middleware
app.use(bodyParser.json({ extended: true }));

app.use(userRouter);
app.use(hostRouter);
app.use(authRouter);

// MongoDB Connection + Server Start
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
