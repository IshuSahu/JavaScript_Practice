const express = require("express");
const {
  registerUser,
  loginUser,
  curUser,
} = require("../controller/user-controller");
const validToken = require("../middleware/tokenHandler");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/curuser", validToken, curUser);

module.exports = router;
