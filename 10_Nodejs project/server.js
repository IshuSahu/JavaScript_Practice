const http = require("http")

require("dotenv").config()

const GetRequest = require("./methods/get-request")
const PostRequests = require("./methods/post-request")
const PutRequests = require("./methods/put-request")
const DeleteRequests = require("./methods/delete-request")

let movies = require("./data/movies.json")


const PORT = process.env.PORT || 5001;

const server = http.createServer((req,res)=>{
    // res.statusCode =200
    // res.setHeader("content-type", "application/json")
    // res.write(JSON.stringify({message: "Hello Ishu, welcome to Node js"}))
    // res.end()
    req.movies = movies;
    switch(req.method){
        case "GET":
            GetRequest(req,res);
            break;
        case "POST":
            PostRequests(req,res);
            break;
        case "PUT":
            PutRequests(req,res);
            break;
        case "DELETE":
            DeleteRequests(req,res);
            break;
        default:
            res.statusCode =404
            res.setHeader("content-type", "application/json")
            res.write(JSON.stringify({title: "Not found", message: "Route Not found"}))
            res.end()
        
    }
})

server.listen((PORT), ()=>{
    console.log(`server Listening at Port: ${PORT}`);
})