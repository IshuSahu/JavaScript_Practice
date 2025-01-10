
const asyncHandler = require("express-async-handler");
const User = require("../models/user_model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// @desc Register User
// @route POST /api/users
// @access public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400).json({ error: "All fields are mandatory" });
    return;
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400).json({ error: "User already registered" });
    return;
  }

  // HASH password
  const hashedPassword = await bcrypt.hash(password, 10); // 10 is number of salt round
  console.log("hashedPassword: ", hashedPassword);

  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  console.log(`User created Sucessfully: ${user}`);
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400).json({ error: "Error" });
    return;
  }
});

// @desc Login User
// @route POST /api/users/login
// @access public

// now for login to verify it from data we will be using Json web Tokens (JWT.io)
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ error: "All fields are mandatory" });
    return;
  }
  const checkuser = await User.findOne({ email });
  // compare password with hashed password
  if (checkuser && (await bcrypt.compare(password, checkuser.password))) {
    const accesstoken = jwt.sign(
      {
        checkuser: {
          username: checkuser.username,
          email: checkuser.email,
          id: checkuser.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "10m" } 
    );
    res.status(200).json({ accesstoken });
  } else {
    res.status(401).json({ error: "Email or password not valid" });
  }
});

// @desc Get Current User Information
// @route GET /api/users/current
// @access private

// after login we have the token so we can pass that token in Auth -> bearer to verify user to  get their information usnig middleware functionn tokenHandler
const curUser = asyncHandler(async (req, res) => {
  res.json(req.user);
});

module.exports = { registerUser, loginUser, curUser };
