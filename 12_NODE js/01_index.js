const express = require("express")

const app = express()

const port = 3001
app.get("/",(req,res)=>{
    // res.send("Hello World!")
    res.json({Message : "Hello world!"})
})
app.get("/users",(req,res)=>{
    // res.send("Hello World!")
    res.json({Message : "Hello Users!"})
})
app.get("/users/:id",(req,res)=>{
    res.json({Message : `Hello user: ${req.params.id}!`})
})
app.post("/users",(req,res)=>{
    res.json({Message : `Create user `})
})
app.put("/users/:id",(req,res)=>{
    res.json({Message : `Update the user with id : ${req.params.id}!`})
})
app.delete("/users/:id",(req,res)=>{
    res.json({Message : `Delete the user with id: ${req.params.id}!`})
})

app.listen(port, ()=>{
    console.log(`Example listening at port ${port}`);
})