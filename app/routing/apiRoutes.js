var express = require("express");
var path = require("path");
var friends = require("../data/friends");

//the post function that will add the users answer to the responsesArr array
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        return res.json(friends)
    })

    app.post("/api/friends", function (req, res) {
        var match = [];
        var totalDiff = 0;
        var newFriend = req.body;
      
        for (var i = 0; i < friends.length; i++){
            var friendPool = friends[i];
            totalDiff = 0;
            console.log(friendPool)
            for (var j = 0; j < friendPool.responses.length; j++){
                totalDiff += Math.abs(newFriend.responses[j] - friendPool.responses[j]);
            }
        match.push({
            name: friendPool.name,
            photolink: friendPool.photolink,
            totalDiff: totalDiff
        });
        }
        friends.push(newFriend);

        console.log(match)

        match.sort(function (a,b){
            return parseInt(a.totalDiff) - parseInt(b.totalDiff);
        });
        // console.log(match)
        res.json(match[0]);
    //    console.log(match[0]);
    })
}
