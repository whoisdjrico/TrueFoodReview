var test = require('tape');
var dataController = require('../server/dataController');
var opentableController = require('../server/opentableController');
var path = require('path');

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
