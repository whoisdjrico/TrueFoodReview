var test = require('tape');
var dataController = require('../server/dataController');

test('DATA OUTPUT SUCCESS FROM dataController', function (t) {
  t.notDeepLooseEqual(dataController, {});
  t.end();
});
