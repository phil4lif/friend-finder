var express = require("express");
var path = require("path");

module.exports = function (app) {
//routes to the two html pages in this application
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname,"../public/survey.html"));
});
}