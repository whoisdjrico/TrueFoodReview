var mydb = require('./postgres.js');
var Sequelize = require('sequelize');
var Promise = require('bluebird');

var sequelize = new Sequelize('mydb', 'student', 'ilovetesting', {
  host: 'localhost',
  dialect: 'postgres'
});


sequelize.authenticate().then(function(err, data) {
  console.log('Connected with PostgreSQL Raw - test');
}).catch(function(err) {
  console.log(err);
})


module.exports = function(req, res, next) {
  var promises = new Promise(function(resolve, reject) {
    sequelize.query("SELECT * FROM places")
    .then(function(dat) {
      // console.log(typeof dat);
      console.log("SUCCESS!");
      resolve(JSON.stringify(dat));
    });
  })
  return promises.then(function(result) {
    console.log(result);
    res.send(result);
  })
};
