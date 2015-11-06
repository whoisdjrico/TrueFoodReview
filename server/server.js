var express = require('express');
var app = express();
var path = require('path');
var yelpController = require('./yelpController');



app.get('/yelp', yelpController.getData);

app.use(express.static(path.join(__dirname, './../client/')));


app.listen(3000);

module.exports = app;

