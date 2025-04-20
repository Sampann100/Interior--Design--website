<<<<<<< HEAD
const SignupModel = require("../models/Signup");

exports.signUpPage = async (req, res) => {
  try {
    const newUser = new SignupModel(req.body);
    await newUser.save();

    res.status(201).json({ message: "Sign up successful!" });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ message: "Some error occurred!", error });
  }
};
=======
const SignupModel = require("../models/Signup");

exports.signUpPage = async (req, res) => {
  try {
    const newUser = new SignupModel(req.body);
    await newUser.save();

    res.status(201).json({ message: "Sign up successful!" });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ message: "Some error occurred!", error });
  }
};
>>>>>>> 187e5ac (termperory work)
