//https://expressjs.com/en/guide/writing-middleware.html#:~:text=If%20the%20current%20middleware%20function,which%20the%20middleware%20function%20applies.
const express = require("express");
const app = express();

const requestTime = function (req, res, next) {
  req.requestTime = Date.now();
  next();
};

app.use(requestTime);

app.get("/", (req, res) => {
  let responseText = "Hello World!<br>";
  responseText += `<small>Requested at: ${req.requestTime}</small>`;
  res.send(responseText);
});

// The order of middleware loading is important: middleware functions that are loaded first are also executed first.
