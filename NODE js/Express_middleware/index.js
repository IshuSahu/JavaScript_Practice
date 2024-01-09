const express = require("express")
const { listen } = require("../express/app")
const router = express.Router()

const app= express()

const PORT = 5001

// aplication-level middleware


// job of below function is to log all the requests
const loggermiddleware = (req,res,next)=>{
    console.log(`${new Date()} ==== Request [${req.method}]  [${req.url}]`);
    next()
}

app.use(loggermiddleware)

//Third-party middleware
// npm install cookie-parser
const cookieParser = require('cookie-parser')

// load the cookie-parsing middleware
app.use(cookieParser())
//*************************************************router-level middleware


app.use("/api/users",router)

const fakeAuth = (req,res,next)=> {
    const authstatus =false; // http://localhost:5001/api/users
    if(authstatus){
        console.log("User authstatus: " + authstatus);
        next();
    }
    else{
        res.status(404)
        throw new Error("User is not Authorised")
    }
}


const getUser = (req,res)=>{
    res.json({message: "Get all users"})
}
const createUser = (req,res)=>{
    res.json({message: "Create new users"})
}

router.use(fakeAuth)
router.route("/").get(getUser).post(createUser)

//Built-in middleware

/*Express default send a Error message in html formate to incepted that we use Error-handling middleware (we intercept the error and show case in json formate) */
//Error-handling middleware

const errorHandler = ((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
});

// app.use(errorHandler)


app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}`);
})