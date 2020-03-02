var express = require("express");
var path = require("path");
var friends = [
    {
        name: "Samantha",
        photolink: "kajsjfsjfj",
        responses: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
    }
];

//the post function that will add the users answer to the responsesArr array
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        return res.json(friends)
    })

    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        
        console.log(newFriend);
        friends.push(newFriend);
        res.json(true)
    })
}