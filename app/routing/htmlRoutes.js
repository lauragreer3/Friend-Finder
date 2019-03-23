var express = require('express');
var router = express.Router();

//route 1: get route to / survey, displays survey.html
router.get('', function(req, res) {
    res.sendFile('../public.home.html');
});

//route 2: catch-all route to home.html
router.get('/survey', function(req, res) {
    res.sendFile('../public/survey.html');
});

modules.exports = router;
