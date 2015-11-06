var express = require('express');
var app = express();
var path = require('path');
var yelpController = require('./yelpController');
var foursquareController = require('./foursquareController');
var mydb = require('./postgres-orm');




app.get('/yelp', yelpController.getData);
app.get('/foursquare', foursquareController.getData);

app.use(express.static(path.join(__dirname, './../client/')));


app.listen(3000);

module.exports = app;
