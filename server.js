var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var responsesArr = [];


//routes to the two html pages in this application
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
});
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});



//the post function that will add the users answer to the responsesArr array
app.post("/api/responsesArr", function (req, res) {
    var newResponse = req.body;
    console.log(newResponse);
    responsesArr.push(newResponse);
    res.json(true)

})
































app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});