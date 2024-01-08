const requestBodyParser = require("../util/body-parser");
const Crypto = require("crypto");
const WriteToFile = require("../util/write-to-file"); 

module.exports = async (req, res) => {
    if (req.url === "/api/movies") {
        try {
            let body = await requestBodyParser(req);
            body.id = Crypto.randomUUID();
            req.movies.push(body);
            WriteToFile(body); 
            res.writeHead(201, { "Content-Type": "application/json" });
            res.end();
            console.log("request body:", body);
        } catch (error) {
            console.error(error);
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ title: "Validation failed", message: "Request is not valid" }));
        }
    } else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify({ title: "Not found", message: "Route Not found" }));
        res.end();
    }
};
