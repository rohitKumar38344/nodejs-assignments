const express = require("express");
const {
  registerUser,
  home,
  userLogin,
} = require("../controllers/userController");

const router = express.Router();

router.get("/", home);
router.post("/register", registerUser);
router.post("/login", userLogin);

module.exports = router;
