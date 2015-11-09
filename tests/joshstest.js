var test = require('tape');
var path = require('path');
var server = require('./../server/server.js')

// test('basic arithmetic', function (t) {
//     t.plan(3);
//
//     t.equal(2 + 3, 5);
//     t.equal(7 * 8 + 9, 65);
//     t.equal(9 + 4, 13);
// });

test('basic arithmetic', function (t) {
    t.plan(3);

    t.equal(2 + 3, 5);
    t.equal(7 * 8 + 9, 65);
    t.equal(9 + 4, 13);
});
