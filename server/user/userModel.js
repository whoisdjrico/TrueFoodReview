var Sequelize = require('sequelize');

var sequelize = new Sequelize('mydb', 'student', 'ilovetesting', {
  host: 'localhost',
  dialect: 'postgres'
});

//create Model-type-User for Postgres
var User = sequelize.define('user',
  {
    username: {
      type: String,
      unique: true,
      field: 'username'
    },
    password: {
      type: String,
      field: 'password'
    }
  },
  { //tables names are fixed to User Model based on field properties lsited above
    freezeTableName: true
  }
);

module.exports = User.sync({force: true});
