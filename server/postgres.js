var Sequelize = require('sequelize');
var express = require('express');

var sequelize = new Sequelize('mydb', 'student', 'ilovetesting', {
  host: 'localhost',
  dialect: 'postgres'
});

var RatingsYelp = sequelize.define('ratingsYelp', {
  name: {type: Sequelize.STRING},
  rating: {type: Sequelize.FLOAT},
  review_count: {type: Sequelize.INTEGER}
});

var RatingsFoursquare = sequelize.define('ratingsFoursquare', {
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



module.exports = {
  yelp: function(data) {
    RatingsYelp.sync({force: true}).then(function() {
      data.forEach(function(item) {
        var result = {
          name: item.name,
          rating: item.rating,
          review_count: item.review_count
        };
        RatingsYelp.create(result).then(function() {
          console.log("YELP WORKS");
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
  },


  foursquare: function(data) {
    RatingsFoursquare.sync({force: true}).then(function() {
      data.forEach(function(item) {
        var result = {
          name: item.name,
          rating: item.rating,
          review_count: item.review_count
        };
        RatingsFoursquare.create(result).then(function() {
          console.log("FOURSQUARE WORKS");
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
  }
};
