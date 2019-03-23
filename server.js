var express = require("express");
var app = express();
var path = require('path');

var htmlRoutes = require('./app/routing/htmlRoutes.js');
var apiRoutes = require('./app/routing/apiRoutes');

app.use('/', htmlRoutes);
app.use('/api', apiRoutes);