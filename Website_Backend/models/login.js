<<<<<<< HEAD
const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
  Email: { type: String, require: true },
  Password: { type: String, require: true },
});

const loginModel = mongoose.model("loginModel", loginSchema, "Login");

module.exports = loginModel;
=======
const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
  Email: { type: String, require: true },
  Password: { type: String, require: true },
});

const loginModel = mongoose.model("loginModel", loginSchema, "Login");

module.exports = loginModel;
>>>>>>> 187e5ac (termperory work)
