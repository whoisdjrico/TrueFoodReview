var test = require('tape');
var mydb = require('./postgres.js');
var Sequelize = require('sequelize');
var Promise = require('bluebird');
var request = require('request');
var express = require('express');
var app = express();
var path = require('path');
var yelpController = require('./../yelpController');
var dataController = require('./../dataController');
var foursquareController = require('./../foursquareController');

//determine if application data was send to client from server
test('data-service', function(t) {
  t.plan(4);

  t.equal(2+3, 5);
  t.fail('FAILURE');
  t.pass('SUCCESS');
});
