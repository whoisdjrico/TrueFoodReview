var mydb = require('./postgres.js');
var Sequelize = require('sequelize');
var Promise = require('bluebird');

var sequelize = new Sequelize('mydb', 'student', 'ilovetesting', {
  host: 'localhost',
  dialect: 'postgres'
});


sequelize.authenticate().then(function(err, data) {
  console.log('Connected with PostgreSQL - test');
}).catch(function(err) {
  console.log(err);
});


module.exports = function(req, res, next) {
  var promises = new Promise(function(resolve, reject) {
    sequelize.query(`SELECT * FROM "placeYelps"`)
    .then(function(yelp) {
      resolve(yelp);
      sequelize.query(`SELECT * FROM "foursquares"`)
      .then(function(four) {
        var combinedInfo = JSON.parse(JSON.stringify(yelp));
        var counter = 0;
        for(var a = 0, b = four[0].length; a < b; a++) {
          for(var i = 0, j = yelp[0].length; i < j; i++) {
            if(four[0][i].name === yelp[0][a].name) {
              // console.log('found ' + four[0][i].name + " and " + yelp[0][a].name);
              // console.log(combinedInfo[0][a].rating);
              combinedInfo[0][i].rating = ((combinedInfo[0][i].rating * combinedInfo[0][i].review_count + four[0][a].rating * four[0][a].review_count)/(combinedInfo[0][i].review_count + four[0][a].review_count)).toFixed(2);
              combinedInfo[0][i].review_count += four[0][a].review_count;
              // console.log(combinedInfo[0][a].review_count);
              counter = 0;
              // four[0][i] = null;
            }
            else {
              counter++;
              if(counter === yelp[0].length) {
                console.log('going to add new restaurant ' + four[0][a].name);

                console.log('old count is ' + combinedInfo[0].length);
                combinedInfo[0].push(four[0][i]);
                console.log('new count is ' + combinedInfo[0].length);
                console.log(counter);
                counter = 0;
                console.log(counter);

              }
            }
          }
        }
        console.log('here it is');



      })
    });
  });

  return promises.then(function(result) {
    console.log(result);
    // MUST TURN USER('STUDENT') TO SUPERUSER!!!
    sequelize.query(`Copy (Select * From "placeYelps") To '/usr/local/var/postgres/yelp.csv' With CSV`);
    sequelize.query(`Copy (Select * From "foursquares") To '/usr/local/var/postgres/four.csv' With CSV`);
    res.send(result);
  });
};

function findDupe() {

}
