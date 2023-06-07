var express = require("express");
var app = express();

app.listen(3000, () => {
    console.log("Server Running on port 3000");
});

app.get("/url", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
   });

app.get("/christmas", (req, res, next) => {
    const christmas = new Date( "December 25, 2023" )
    const today = new Date();
    const diff = christmas - today;

    res.json([christmas, today, diff]);

  
});