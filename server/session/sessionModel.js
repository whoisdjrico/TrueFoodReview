var Sequelize = require('sequelize');

var sequelize = new Sequelize('mydb', 'student', 'ilovetesting', {
  host: 'localhost',
  dialect: 'postgres'
});

//create Model-type-User for Postgres
var Session = sequelize.define('session',
  {
    username: {
      type: Sequelize.STRING,
      unique: true,
      field: 'username'
    },
    cookieID: {
      type: Sequelize.STRING,
      field: 'cookieID'
    }
  },
  { //tables names are fixed to Session Model based on field properties lsited above
    freezeTableName: true
  }
);

module.exports = Session;
