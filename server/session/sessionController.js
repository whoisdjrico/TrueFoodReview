var Session = require('./sessionModel');
var Cookies = require('cookies');

var sessionController = {

  isLoggedIn: function (req, res, next) {
    str = req.headers.cookie;
    str.match(/ssid/) ? next() : res.redirect('../../client/index.html');
  },

  startSession: function (req, res) {
    var obj = {};
    obj.cookieId = req.body.username + req.body.password;
    obj.expires = new Date();
    Session.create(obj, function (err) {
      if (err) { res.redirect('../../client/index.html'); }
      res.redirect('../../client/mainnpm.html');
    });
  }

};

module.exports = sessionController;
