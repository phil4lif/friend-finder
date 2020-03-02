var express = require("express");
var path = require("path");

//the post function that will add the users answer to the responsesArr array
module.exports = function (app) {
app.get("/api/responsesArr", function (req, res) {
    return res.json(responsesArr)
})

app.post("/api/responsesArr", function (req, res) {
    var newResponse = req.body;
    console.log(newResponse);
    responsesArr.push(newResponse);
    res.json(true)

})
}