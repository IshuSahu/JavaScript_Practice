/*
  registerUser,
  loginUser,
  addCourse,
  deleteCourse,
*/
const asyncHandler = require("express-async-handler");
// const User = require("../models/user_model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerAdmin = asyncHandler(async (req, res) => {
  const { name, mail, password } = req.body;
  res.send("user admin register page");
});

const loginAdmin = asyncHandler(async (req, res) => {
  const { mail } = req.body;
  res.send("user admin login page");
});

const addCourse = asyncHandler(async (req, res) => {
  const { courseID, mail } = req.body;
  res.send("user admin addCourse page");
});

const updateCourse = asyncHandler(async (req, res) => {
  const { courseID, mail } = req.body;
  res.send("user admin updateCourse page");
});

const deleteCourse = asyncHandler(async (req, res) => {
  const { courseID, mail } = req.body;
  res.send("user admin deleteCourse page");
});

module.exports = {
  registerAdmin,
  loginAdmin,
  addCourse,
  updateCourse,
  deleteCourse,
};
