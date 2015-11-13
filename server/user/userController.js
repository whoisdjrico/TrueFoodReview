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
    console.log('CREATE_USER');
    User.sync().then(function () {
      User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
      }, function (err) {
        console.log(err);
      });
    });
    next();
  },

  verifyUser: function (req, res, next) {
    //searches Postgres database for username and password to verify and redirect user
    console.log('VERIFY_USER__XX');
    // User.find(
    console.log('BODYCHECK', req.body);
    var query = User.findAll({
      where:

      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
      }
      // ,

    })
    .then(function (data) {
      console.log('RUNNER', data);
      console.log('PROMISE');
    });

      // //the function below is located at the top of the file as a help function
      // function (err, user) {
      //   if (err) {
      //     console.log('VERIFY_USER_ERROR');
      //     //returns user to 'home', 'index', or 'login' page
      //     res.redirect('/signup');
      //   }
      //   console.log('VERIFY_USER_YY');
      //   //forwards user to application page
      //   next();
      // }

    // );
  }

};

module.exports = userController;
