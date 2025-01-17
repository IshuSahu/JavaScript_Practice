//***************************************************aplication-level middleware
// job of below function is to log all the requests
/*
const express = require("express");
const router = express.Router();

const app = express();

const PORT = 5001;
const loggermiddleware = (req, res, next) => {
  console.log(`${new Date()} ==== Request [${req.method}]  [${req.url}]`);
  next();
};

app.use(loggermiddleware);
 */

//*************************************************router-level middleware
/*
const express = require("express");
const router = express.Router();

const app = express();

const PORT = 5001;
app.use("/api/users", router);

const fakeAuth = (req, res, next) => {
  const authstatus = true; // http://localhost:5001/api/users
  if (authstatus) {
    console.log("User authstatus: " + authstatus);
    next(); // Passes control to the next middleware or route handler
  } else {
    res.status(404);
    throw new Error("User is not Authorised");
  }
};

const getUser = (req, res) => {
  res.json({ message: "Get all users" });
};
const createUser = (req, res) => {
  res.json({ message: "Create new users" });
};
router.use(fakeAuth);
router.route("/").get(getUser).post(createUser);
*/

//*********************************Built-in middleware

/*Express default send a Error message in html formate to incepted that we use Error-handling middleware (we intercept the error and show case in json formate) */

// app.use(express.json());
// app.use(express.urlencoded({ extended: true })); //This parse the data to Json
//we also have exress.static

// //*************************************************Error-handling middleware

/*
const express = require('express');
const app = express();

// Example route that throws an error
app.get('/some-route', (req, res, next) => {
  const error = new Error('Something went wrong!');
  next(error); // Passes the error to the error handler
});

// Error-handling middleware
const errorHandler = (err, req, res, next) => {
  console.error(err.stack); // Logs the stack trace
  res.status(500).send('Something broke!'); // Sends a response to the client
};

// Use error handler as the last middleware
app.use(errorHandler);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));

*/

//************************************************Third-party middleware
// npm install cookie-parser
// npm install morgan // another third party
// app.use(logger("dev")); //output like: GET /api/users 200 5.832 ms - 27 (aditional log info)
// app.use(logger("combined")) ans so on.........

/*
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const app = express();
PORT =3001
// Use morgan for logging requests
app.use(logger("dev"));

// Use cookie-parser to parse cookies
app.use(cookieParser());

// Example route
app.get("/", (req, res) => {
  res.send(`Cookie value: ${req.cookies.username || "No cookie found"}`);
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});

*/

// https://expressjs.com/en/guide/using-middleware.html
