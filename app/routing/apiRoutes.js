var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var router = express.Router();
var fs = require('fs');
var maxDifference =41;

//route 1: GET route with url /api/friends which displays json of possible friends
router.get('/friends', function(req, res) {
    res.sendFile(path.join(__dirname,'../data.friends.js'));
});

//route 2: POST route with url /api/friends that handles incoming survey results
//  also handles compatibility logic

//compatibility logic:
//add all answers together, compare totals, get difference, least difference is most compatible

router.post('/friends', function(req, res) {
    // res.sendFile(path.join(__dirname,'../public/survey.html'));
    // console.log('got form data');
    // console.log(req.body);
    var userData = req.body;
    // console.log('Received User Data from user: ' + userData.name);
    // console.log('Picture: ' + userData.photo);
    // console.log('User Answers: ');
    userData.total_score = 0;
    var scores = userData["scores[]"];
    scores.forEach(answer => {
        userData.total_score += parseInt(answer);        
    });
    console.log('Total Score: ' + userData.total_score);
    
    //compare with other total scores in database

    //read from javascript file
    var friendsObject = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/friends.js'), 'utf8'));
    
    //compare to each total score
    var closestFriend = {};
    var closestDifference = maxDifference;
    //todo test for no objects - no friends in database yet

    friendsObject.all_friends.forEach(friend => {
        var surveyDifference = Math.abs(parseInt(friend.total_score) - userData.total_score);
        if(surveyDifference < closestDifference) {
            closestFriend = friend;
            closestDifference = surveyDifference;
        }
    });
    //@todo handle cases for tied scores
    //look at pics and whoever looks like a foot ignore

    //return result of closest match
    console.log("Closest Match in database: ");
    console.log(closestFriend);
    //add current user to friends.js object
    friendsObject.all_friends.push(userData);
    //write friends.js back to file
    
    fs.writeFile(path.join(__dirname, '../data/friends.js'), JSON.stringify(friendsObject, null, 2), function(err) {
        if(err) {
            console.log('error writing to file')
            console.log(err);
            //return error to browser
        }
    });

    //send closest match information back to the browser
    res.json(closestFriend);
});


module.exports = router;


