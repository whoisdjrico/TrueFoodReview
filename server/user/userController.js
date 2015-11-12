var User = require('./userModel');

function errorVerify (err, user) {
  if (err) {
    //returns user to 'home', 'index', or 'login' page
    res.redirect('../../client/index.html');
  }
  //forwards user to application page
  next();
}

var userController = {

  createUser: function (req, res, next) {
    //create new user in Postgres database 'mydb', 'student', 'ilovetesting'
    User.create({
      username: req.body.username,
      password: req.body.password
    });
    next();
  },

  verifyUser: function (req, res, next) {
    //searches Postgres database for username and password to verify and redirect user
    User.find(
      {
        username: req.body.username,
        password: req.body.password
      },
       errorVerify
    );
  }

};

module.exports = userController;
