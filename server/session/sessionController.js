var Session = require('./sessionModel');
var Cookies = require('cookies');

var sessionController = {

  isLoggedIn: function (req, res, next) {
    //checks is user has a cookie to see if they are logged in
    str = req.headers.cookie;
    str.match(/ssid/) ? next() : res.redirect('/signup');
  },

  startSession: function (req, res) {
    //creates a session object for the user and then
    //redirects the user to the web application
    var obj = {};
    obj.cookieId = req.body.username + req.body.password;
    obj.expires = new Date();
    Session.sync().then(function () {
      Session.create(obj, function (err) {
        res.redirect('/main');
      });
    });
  }

};

module.exports = sessionController;
