module.exports = (req, res) => {
    // Extract id from the URL
    let id = req.url.split('/').pop();

    if (req.url === "/api/movies") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify(req.movies));
        res.end();
    } else if (req.url.startsWith("/api/movies/")) { //imp  
        res.setHeader("Content-Type", "application/json");
        let filteredMovie = req.movies.filter((movie) => movie.id == id);

        if (!filteredMovie) {
            res.statusCode = 404;
            res.write(JSON.stringify({ title: "Not found", message: "not a valid ID" }));
            res.end();
        } else {
            res.statusCode = 200;
            res.write(JSON.stringify(filteredMovie));
            res.end();
        }
    } else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify({ title: "Not found", message: "Route Not found" }));
        res.end();
    }
};
