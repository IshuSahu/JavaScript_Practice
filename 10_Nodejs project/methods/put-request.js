const requestBodyParser = require("../util/body-parser");
const Crypto = require("crypto");
const WriteToFile = require("../util/write-to-file"); 

module.exports =async (req,res) => {
    let id = req.url.split('/').pop();
    if (req.url === "/api/movies") {
        try {
            let body = await requestBodyParser(req);
            const index = req.movies.findIndex((movie) => movie.id == id);

            if (!index) {
                res.statusCode = 404;
                res.write(JSON.stringify({ title: "Not found", message: "Movie Id Not found in Database" }));
                res.end();
            } else {
                req.movies[index] = {id,...body}
                writeToFile(req.movies)
                res.writeHead(204, { "Content-Type": "application/json" });
                res.end(JSON.stringify(req.movies[index]));
            }
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