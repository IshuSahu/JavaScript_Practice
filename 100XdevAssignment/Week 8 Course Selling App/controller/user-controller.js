/*
 registerUser,
  loginUser,
  courses,
  purchaseCourses, */
const asyncHandler = require("express-async-handler");
// const User = require("../models/user_model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  res.send("user register page");
});
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  res.send("user login page");
});
const courses = asyncHandler(async (req, res) => {
  const { email } = req.body;
  res.send("user courses page");
});
const purchaseCourses = asyncHandler(async (req, res) => {
  const { email } = req.body;
  res.send("user purchased courses page");
});

module.exports = { registerUser, loginUser, courses, purchaseCourses };
