require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const ItemCollection = require("./models/items");

const session = require("express-session");
const MongoDBstore = require("connect-mongodb-session")(session);

const hostRouter = require("./routes/host");
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");

const app = express();

//Cors middleware
const allowedOrigins = [
  "http://localhost:5173",
  "https://interior-design-website-frontend.onrender.com"
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);


//Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(authRouter);
app.use(userRouter);
app.use(hostRouter);

// MongoDB Connection + Server Start
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error("MongoDB connection error:", err));
