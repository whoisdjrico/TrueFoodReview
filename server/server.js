var express = require('express');
var app = express();
var yelpController = require('./yelpController');



app.get('/yelp', yelpController.getData);
// app.get('/linkedIn', linkedInController.getData);




app.listen(3000);

module.exports = app;

