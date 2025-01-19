// console.log("Hello world");
// console.log("Hello to node js tutorial");
// console.log("Hello to node tutorial");
// process.exit(0)

const express = require("express");
const app = express();


app.use(function(req, res, next) {
    console.log("request received");
    next();
})

app.get("/sum", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});

app.listen(3000, () => {
  console.log(`server is running on port ${3000}`);
});
