const express = require("express")
const app = express()
const errorHandler = require("./middleware/errorHandler")
const connectDB = require("./config/dbConnection")

const dotenv =  require("dotenv").config

const PORT = process.env.PORT || 5000 

connectDB();
app.use(express.json());
app.use("/api/contacts", require("./routes/contact-routes")) //app.use-->middleware
app.use("/api/users", require("./routes/user-routes")) 
app.use(errorHandler)

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})