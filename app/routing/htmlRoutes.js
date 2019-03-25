var express = require('express');
var path = require('path');
var router = express.Router();

//route 1: catch-all route to home.html
router.all('', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
});

router.get('/app/form/validate.js', function(req, res) {
    res.sendFile(path.join(__dirname, '../form/validate.js'));
});

//route 2: get route to / survey, displays survey.html
router.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname,'../public/survey.html'));
});

module.exports = router;
