const User = require("../models/userModel.js");

exports.home = (req, res) => {
  res.send("<h1>Welcome to User Management App</h1>");
};

exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      throw new Error("All input fields are required!");
    }
    //check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      throw new Error("User already registered");
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    res.status(201).json({
      success: true,
      message: "User Registered Successfully",
      user,
    });
  } catch (error) {
    console.log("Error: ", error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      throw new Error("All input fields are required");
    }

    const userData = await User.findOne({ email });
    if (userData) {
      if (password == userData.password) {
        res.status(201).json({
          success: true,
          message: "User login successfully",
        });
      } else {
        throw new Error("Password is wrong");
      }
    } else {
      throw new Error("No account is associated with this email");
    }
  } catch (error) {
    console.log("Error: ", error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
