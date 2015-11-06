var Sequelize = require('sequelize');
var express = require('express');
var yelp = require('./yelpController');

var sequelize = new Sequelize('mydb', 'student', 'ilovetesting', {
  host: 'localhost',
  dialect: 'postgres'
});

var Ratings = sequelize.define('ratings', {
  name: {type: Sequelize.STRING},
  rating: {type: Sequelize.FLOAT},
  review_count: {type: Sequelize.INTEGER}
});

var Address = sequelize.define('address', {
  name: {type: Sequelize.STRING, unique: true},
  lat: {type: Sequelize.FLOAT},
  long: {type: Sequelize.FLOAT},
  address: {type: Sequelize.STRING},
  city: {type: Sequelize.STRING},
  state: {type: Sequelize.STRING},
  postal_code: {type: Sequelize.INTEGER}
});



sequelize.authenticate().then(function(err, data) {
  console.log('Connected with PostgreSQL');
}).catch(function(err) {
  console.log(err.message);
});



module.exports = function(data) {
  Ratings.sync({force: true}).then(function() {
    data.forEach(function(item) {
      var result = {
        name: item.name,
        rating: item.rating,
        review_count: item.review_count
      };
      Ratings.create(result).then(function() {
      });
    });
  });
  Address.sync().then(function() {
    data.forEach(function(item) {
      var result = {
        name: item.name,
        lat: item.lat,
        long: item.long,
        address: item.address[0],
        city: item.city,
        state: item.state,
        postal_code: item.postal_code
      };
      Address.create(result).then(function() {
        console.log("YESSS");
      });
    });
  });
};
