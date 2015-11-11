// var express = require('express');
// var app = express();
var test = require('tape');
var path = require('path');
var server = require('../server/server.js');
var request = require('supertest');

// test('First test!', function (t) {
//   t.end();
// });


test('Connected properly!', function (t) {
  request(server)
    .get('/')
    .expect('Content-Type', /json/)
    .expect(200)
    // .listen(3000)
    // .timeoutAfter(5000)
    .end(function (err, res) {
      t.end();
    });

    // .end(function (err, res) {
    //   var routes = ['/', '/data'];
    //   t.error(err, 'No error');
    //   t.same(res.body, routes, 'Routes as expected');
    //   t.end();
    // });
});
