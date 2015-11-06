var express = require('express');
var app = express();
var yelpController = require('./yelpController');
var foursquareController = require('./foursquareController');



app.get('/yelp', yelpController.getData);
app.get('/foursquare', foursquareController.);




app.listen(3000);

module.exports = app;

