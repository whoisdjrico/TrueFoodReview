var User = require('./userModel');

function errorVerify (err, user) {
  if (err) {
    //returns user to 'home', 'index', or 'login' page
    res.redirect('/signup');
  }
  //forwards user to application page
  next();
}

var userController = {

  createUser: function (req, res, next) {
    //create new user in Postgres database 'mydb', 'student', 'ilovetesting'
    User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password
    });
    next();
  },

  verifyUser: function (req, res, next) {
    //searches Postgres database for username and password to verify and redirect user
    User.find(
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
      },
      //the function below is located at the top of the file as a help function
      function (err, user) {
        if (err) {
          //returns user to 'home', 'index', or 'login' page
          res.redirect('/signup');
        }
        //forwards user to application page
        next();
      }
    );
  }

};

module.exports = userController;
