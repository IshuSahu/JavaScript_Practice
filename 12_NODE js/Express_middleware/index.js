const express = require("express");
const router = express.Router();

const app = express();

const PORT = 5001;

//***************************************************aplication-level middleware

// job of below function is to log all the requests
const loggermiddleware = (req, res, next) => {
  console.log(`${new Date()} ==== Request [${req.method}]  [${req.url}]`);
  next();
};

app.use(loggermiddleware);

//*************************************************router-level middleware
// app.use("/api/users", router);

// const fakeAuth = (req, res, next) => {
//   const authstatus = true; // http://localhost:5001/api/users
//   if (authstatus) {
//     console.log("User authstatus: " + authstatus);
//     next();
//   } else {
//     res.status(404);
//     throw new Error("User is not Authorised");
//   }
// };

// const getUser = (req, res) => {
//   res.json({ message: "Get all users" });
// };
// const createUser = (req, res) => {
//   res.json({ message: "Create new users" });
// };
// router.use(fakeAuth);
// router.route("/").get(getUser).post(createUser);

//***********************************************Built-in middleware

/*Express default send a Error message in html formate to incepted that we use Error-handling middleware (we intercept the error and show case in json formate) */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//we also have exress.static

// //*************************************************Error-handling middleware

// const errorHandler = (err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Something broke!");
// };

// app.use(errorHandler);

//************************************************Third-party middleware
// npm install cookie-parser
// npm install morgan // another third party
const cookieParser = require("cookie-parser");
const logger = require("morgan");

// load the cookie-parsing middleware
// app.use(cookieParser())
app.use(logger("dev")); //output like: GET /api/users 200 5.832 ms - 27 (aditional log info)
// app.use(logger("combined")) ans so on.........

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});

// https://expressjs.com/en/guide/using-middleware.html
