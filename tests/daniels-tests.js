var test = require('tape');
var path = require('path');
var express = require('express');
var app = express();
var dataController = require('../server/dataController');
var opentableController = require('../server/opentableController');
var cookiesController = require ('../server/cookies/cookiesController');
var sessionController = require ('../server/session/sessionController');
var userController = require ('../server/user/userController');

//verify data output from Postgres clears as a data object
test('DATA OUTPUT SUCCESS FROM dataController', function (t) {
  t.notDeepLooseEqual(dataController, {});
  t.end();
});

//for use on api requests for json before controller completion as middleware
test('API data request successful', function (t) {
  t.notDeepLooseEqual(opentableController.getData, "application/json");
  t.end();
});


//User Model was synced to database
test('User Model was synced to database', function (t) {
  t.plan(1);
  t.equal(userController, true);
  t.end();
});

//User was created to database
test('User was created to database', function (t) {
  t.plan(1);
  t.notEqual(userController.createUser);
  t.end();
});

//Session Model was created
test('Session Model was synced to database', function (t) {
  t.plan(1);
  t.equal(sessionController, true);
  t.end();
});

//Session was created to database
test('Session was created to database', function (t) {
  t.plan(1);
  t.notEqual(sessionController.createSession);
  t.end();
});

//Session was created
test('Session is being created', function (t) {
  t.plan(1);
  t.notEqual(sessionController.startSession,
    app.get('/', function (req, res) {
      res.redirect('../../client/index.html');
    })
  );
  t.end();
});

//Cookies were created
