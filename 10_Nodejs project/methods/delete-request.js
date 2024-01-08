const writeToFile = require("../util/write-to-file");


module.exports = (req,res) => {
    let id = req.url.split('/').pop();
    if (req.url.startsWith("/api/movies/")) { //imp  
        res.setHeader("Content-Type", "application/json");
        let filteredMovie = req.movies.filter((movie) => movie.id == id);

        if (!filteredMovie) {
            res.statusCode = 404;
            res.write(JSON.stringify({ title: "Not found", message: "Movie Id Not found in Database" }));
            res.end();
        } else {
            res.statusCode = 200;
            req.movies.splice(filteredMovie,1)
            writeToFile(req.movies)
            res.writeHead(204, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ title: "Deletion Sucess", message: "Record Delete sucessfully"}));
        }
    }

};