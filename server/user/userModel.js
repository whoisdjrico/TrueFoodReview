var Sequelize = require('sequelize');

var sequelize = new Sequelize('mydb', 'student', 'ilovetesting', {
  host: 'localhost',
  dialect: 'postgres'
});

//create Model-type-User for Postgres
var User = sequelize.define('user',
  {
    firstName: {
      type: Sequelize.STRING,
      unique: true,
      field: 'first name'
    },
    LastName: {
      type: Sequelize.STRING,
      unique: true,
      field: 'last name'
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      field: 'email'
    },
    password: {
      type: Sequelize.STRING,
      field: 'password'
    }
  },
  { //tables names are fixed to User Model based on field properties lsited above
    freezeTableName: true
  }
);

User.sync();

module.exports = User;
