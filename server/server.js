var express = require('express');
var app = express();
var path = require('path');
var yelpController = require('./yelpController');
var dataController = require('./dataController');
var fusionTableController = require('./fusionTableController');
var foursquareController = require('./foursquareController');
var config = require('../config.json');
var userController = require('./user/userController');
var sessionController = require('/session/sessionController');
var cookiesController = require('/cookies/cookiesController');


app.get('/fusion', fusionTableController.getData);
app.get('/data', yelpController.getData, foursquareController.getData, dataController);
// app.get('foursquare', foursquareController.getData);
app.use(express.static(path.join(__dirname, './../client/')));
// app.get('/login', LoginController);

app.get('/', function(req, res) {
  res.render('signup.html');
});

app.post('/signup', userController.createUser, userController.verifyUser, cookiesController.setCookie, sessionController.startSession, function (req, res) {
  res.redirect('/main.html');
});

app.post('/login', userController.verifyUser, cookiesController.setCookie, sessionController.startSession, function (req, res) {
  res.redirect('/main.html');
});

app.listen(3000);

module.exports = app;
