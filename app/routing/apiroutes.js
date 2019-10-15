var path = require('path');
var friendsArray = require('../data/friends.js');

// console.log(friendsArray)

function friendMatcher(app) {
    // displays all friends
    app.get('/api/friends', function (req, res) {
        res.json(friendsArray);
    });

    // for adding new friend
    app.post('/api/friends', function (req, res) {
        // grab user input
        var newEntry = {
            name: req.body.name,
            photo: req.body.photo,
            scores: []
        };
        var answers = [];
        // console.log(req.body.scores)
        for (var i = 0; i < req.body.scores.length; i++) {
            answers.push(parseInt(req.body.scores[i]))
        }
        newEntry.scores = answers;
        // checking new entry with friends.js data
        var scoreComparison = [];
        for (var i = 0; i < friendsArray.length; i++) {
            // console.log(newEntry);
            console.log(friendsArray[i]);
            // math for checking score
            var score = 0;
            console.log(newEntry.scores)
            for (var j = 0; j < newEntry.scores.length; j++) {
                score += Math.abs(newEntry.scores[j] - friendsArray[i].scores[j]);
                // logs scores difference
                // console.log(score)

                // logs user input
                // console.log("user score: " + newEntry.scores[j])

                // console.log("DB score: " + friendsArray[i].scores[j]);
            }
            scoreComparison.push(score);
            console.log(scoreComparison);
        };
        // determines best match
        var bestMatch = 0; // start with first object in array
        for (var i = 1; i < scoreComparison.length; i++) {
            // checks for lowest score for best match
            if (scoreComparison[i] <= scoreComparison[bestMatch]) {
                bestMatch = i;
            }
        };
        // creates variable to call later
        var bestFriendMatch = friendsArray[bestMatch];
        // takes user input and adds as new data 
        friendsArray.push(newEntry);
        res.json(bestFriendMatch);
    });
};

module.exports = friendMatcher;