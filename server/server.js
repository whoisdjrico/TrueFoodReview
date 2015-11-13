var express = require('express');
var app = express();
var path = require('path');
var yelpController = require('./yelpController');
var dataController = require('./dataController');
var fusionTableController = require('./fusionTableController');
var foursquareController = require('./foursquareController');
var config = require('../config.json');
var userController = require('./user/userController');
var sessionController = require('./session/sessionController');
var cookiesController = require('./cookies/cookiesController');

// Test to get data from the fusion table
app.get('/fusion', fusionTableController.getData);

app.get('/data', yelpController.getData, foursquareController.getData, dataController);
app.use(express.static(path.join(__dirname, './../client/')));

app.get('/', function(req, res) {
  res.render('signup.html');
});

app.post('/signup', userController.createUser, userController.verifyUser, cookiesController.setCookie, sessionController.startSession, function (req, res) {
  res.redirect('/main');
});

app.post('/login', userController.verifyUser, cookiesController.setCookie, sessionController.startSession, function (req, res) {
  res.redirect('/main');
});

app.get('/main', sessionController.isLoggedIn, function (req, res) {
  res.render('/client/main.html');
});

app.listen(3000);

module.exports = app;
