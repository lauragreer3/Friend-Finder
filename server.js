var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var htmlRoutes = require('./app/routing/htmlRoutes.js');
var apiRoutes = require('./app/routing/apiRoutes');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

let port = process.env.PORT;
if (port == null || port == "") {
    port = 8000;
}
app.listen(port, function() {
    console.log('Started Friend Finder Server at port' + port);
});
module.exports = app;