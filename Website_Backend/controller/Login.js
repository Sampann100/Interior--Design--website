<<<<<<< HEAD
const SignupModel = require("../models/Signup");
const loginPage = require("../models/login");
const bcrypt = require("bcrypt");

exports.loginPage = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    if (!Email || !Password) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    const signupData = await SignupModel.findOne({ Email });

    if (!signupData) {
      return res.status(400).json({ message: "User not found!" });
    }

    const isMatch = bcrypt.compare(Password, signupData.Password);

    if (isMatch) {
      const userData = new loginPage({ Email, Password });
      await userData.save();
      return res.status(201).json({ message: "Login successful!" });
    } else {
      return res.status(401).json({ message: "Email or Password is invald!!" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Server error!" });
  }
};
=======
const SignupModel = require("../models/Signup");
const loginPage = require("../models/login");
const bcrypt = require("bcrypt");

exports.loginPage = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    if (!Email || !Password) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    const signupData = await SignupModel.findOne({ Email });

    if (!signupData) {
      return res.status(400).json({ message: "User not found!" });
    }

    const isMatch = bcrypt.compare(Password, signupData.Password);

    if (isMatch) {
      const userData = new loginPage({ Email, Password });
      await userData.save();
      return res.status(201).json({ message: "Login successful!" });
    } else {
      return res.status(401).json({ message: "Email or Password is invald!!" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Server error!" });
  }
};
>>>>>>> 187e5ac (termperory work)
