const asyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")

const validToken = asyncHandler(async (req,res,next)=>{
    let token;
    let authToken = req.headers.authorization || req.headers.Authorization
    if(authToken && authToken.startsWith("Bearer")){
        token = authToken.split(" ")[1]
        jwt.verify(token,process.env.ACCESS_TOKEN_SECRET, (err,decode) => {
            if(err){
                res.status(401)
                throw new Error("User is not authorized")
            }
            console.log(decode);
        })
    }
})

module.exports = validToken;