var Ratings = sequelize.define('Ratings',{
  name: Sequelize.STRING,
  rating: Sequelize.FLOAT,
  review_count: Sequelize.INTEGER,
  lat: Sequelize.FLOAT,
  long: Sequelize.FLOAT,
  Address: Sequelize.STRING,
  City: Sequelize.STRING,
  State: Sequelize.STRING,
  Postal_code: Sequelize.INTEGER
});

module.exports = Ratings;
