// Add routes for admin login, admin signup, create a course, delete a course, add course content.

const express = require('express');
const router = express.Router();
const {
  registerAdmin,
  loginAdmin,
  addCourse,
  updateCourse,
  deleteCourse,
} = require("../controller/admin-controller");
const validToken =()=>{
  next();
}
router.post("/register", registerAdmin);
router.post("/login", loginAdmin);
router.post("/create-courses", validToken, addCourse);
router.post("/add-courses-content", validToken, updateCourse);
router.delete("/delete-course", validToken, deleteCourse);

module.exports = router;
