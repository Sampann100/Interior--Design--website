const loginModel = require("../../models/login");
const SignupModel = require("../../models/Signup");
const bcryptjs = require("bcryptjs");

exports.loginPage = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    if (!Email || !Password) {
      return res
        .status(400)
        .json({ message: "All fields are required!" });
    }

    const existingUser = await loginModel.findOne({ Email });
    if (existingUser) {
      return res
        .status(200)
        .json({ message: "User already exists!" });
    }

    const signupData = await SignupModel.findOne({ Email });

    if (!signupData) {
      return res
        .status(400)
        .json({ message: "User not found!" });
    }

    const isMatch = await bcryptjs.compare(Password, signupData.Password);

    if (isMatch) {
      const userData = new loginModel({ Email, Password });
      await userData.save();
      return res.status(201).json({
        message: "Login successful!"
      });
    } else {
      return res
        .status(401)
        .json({ message: "Email or Password is invald!!" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    return res
      .status(500)
      .json({ message: "Server error!" });
  }
};
