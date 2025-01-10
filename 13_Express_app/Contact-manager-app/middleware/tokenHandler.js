const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validToken = asyncHandler(async (req, res, next) => {
  let token;
  const authHeader = req.headers.authorization || req.headers.Authorization;
  
  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.split(" ")[1]; // Extract token after "Bearer "

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decode) => {
      if (err) {
        res.status(401);
        throw new Error("User is not authorized");
      }
      
      req.user = decode.checkuser; // Set the decoded user object to req.user
      next(); // Move to the next middleware or route handler
    });
  } else {
    res.status(401);
    throw new Error("User is not authorized or Token is missing in Header");
  }
});

module.exports = validToken;
