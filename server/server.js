var express = require('express');
var app = express();
var path = require('path');
var yelpController = require('./yelpController');
var dataController = require('./dataController');
var fusionTableController = require('./fusionTableController');
var foursquareController = require('./foursquareController');
var config = require('../config.json');

// Test to get data from the fusion table
app.get('/fusion', fusionTableController.getData);


app.get('/data', yelpController.getData, foursquareController.getData, dataController);
// app.get('foursquare', foursquareController.getData);
app.use(express.static(path.join(__dirname, './../client/')));
// app.post('/signup', SignUpController);
app.get('/', function(req, res) {
  res.render('index.html');
});

app.listen(3000);

module.exports = app;
