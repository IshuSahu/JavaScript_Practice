const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  courses,
  purchaseCourses,
} = require("../controller/user-controller");

// Add route skeleton for user login, signup, purchase a course, sees all course, see the purchased course
const validToken =()=>{
  next();
}
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/all-courses", validToken, courses);
router.get("/purchased-course", validToken, purchaseCourses);

module.exports = router;
