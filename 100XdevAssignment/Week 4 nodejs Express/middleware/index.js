//Assignment 1 ->
//Create a midleware that count's the number of request coming to the server

// const express = require("express");
// const app = express();

// let requestCount = 0;
// let countRequest = (req, res, next) => {
//   requestCount = requestCount + 1;
//   next();
// };
// app.use(countRequest);
// app.get("/", (req, res) => {
//   res.status(200).json({ messsage: requestCount });
// });

// app.listen(3000, () => {
//   console.log(`server is running on port ${3000}`);
// });

//Assignment 2->
//How to protect your server from DOS(Denial of Service)
//Statments say that make sure to block the user if it
//sents more than 5 request per second
//In real world IP are used to track and protect the server for DOS attacks


// const express = require("express");
// const app = express();

// let userRequestCount = {};
// const BlockIps = [];
// setInterval(() => {
//   userRequestCount = {};
// }, 10000);

// let usercount = (req, res, next) => {
//   let clientIp;

//   if (req.headers["x-forwarded-for"]) {
//     clientIp = req.headers["x-forwarded-for"].split(",")[0].trim();
//   } else {
//     clientIp = req.ip;
//   }
//   if (BlockIps.includes(clientIp)) {
//     return res.status(403).json({
//       error: "Your IP address has been blocked.",
//     });
//   }
//   if (!userRequestCount[clientIp]) {
//     userRequestCount[clientIp] = 1;
//   } else {
//     userRequestCount[clientIp]++;
//   }

//   if (userRequestCount[clientIp] > 5) {
//     BlockIps.push(clientIp);
//     return res.status(406).json({ messsage: "Too any request has been Found" });
//   }
//   next();
// };

// app.use(usercount);
// app.get("/", (req, res) => {
//   res.json({ userRequestCount, BlockIps });
// });

// app.listen(3000, () => {
//   console.log(`server is running on port ${3000}`);
// });


// Assignment-3-> 
//how to write a erro handling midleware 
//as the standar one is 500 
//write a midleware to convert the status code to the 404 
//making sure the end user don't see the errors

const express = require('express')
const app = express();

app.get('/some-error',(req,res)=>{
  const error = new Error("Something is begin broke")
  next(error)
})

const errorHandler = (err,req,res,next)=>{
  console.log(err.stack);
  res.status(404).json({message:"Bad Request"});
}

app.use(errorHandler);
app.listen(3000, ()=>{
  console.log(`server is running on port ${3000}`);
})
