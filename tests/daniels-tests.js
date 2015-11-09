var test = require('tape');
var Promise = require('bluebird');
var mydb = require('./postgres.js');
var Sequelize = require('sequelize');
var server = require('./server/server.js');
var yelpController = require('./../yelpController');
var dataController = require('./../dataController');
var foursquareController = require('./../foursquareController');

//determine if application data was send to client from server
test('foursquare api data request', function(t) {
  t.plan(1);

  t.equal(foursquareController.getData, 'result');

  t.pass('data was received from foursquare api');
  t.fail('data was not received from the foursquare api, please review code')
  t.end();
});
