var express = require('express');
var router = express.Router();

//route 1: GET route with url /api/friends which displays json of possible friends
router.get('/api/friends', function(req, res) {
    res.sendFile('../data.friends.js');
});

//route 2: POST route with url /api/friends that handles incoming survey results
//  also handles compatibility logic

//compatibility logic:
//add all answers together, compare totals, get difference, least difference is most compatible

router.get('/api/friends', function(req, res) {
    // res.sendFile('../public/survey.html');
});

modules.exports = router;


