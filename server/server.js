var express = require('express');
var app = express();
var path = require('path');
var yelpController = require('./yelpController.js');
var dataController = require('./dataController.js');
var fusionTableController = require('./fusionTableController.js');
var foursquareController = require('./foursquareController.js');
var config = require('../config.json');
var userController = require('./user/userController.js');
var sessionController = require('./session/sessionController.js');
var cookiesController = require('./cookies/cookiesController.js');

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

app.get('main', sessionController.isLoggedIn, function (req, res) {
  res.render('/client/main.html');
});

app.listen(3000);

module.exports = app;
