var Cookies = require('cookies');

var cookiesController = {

  setCookie: function (req, res, next) {
    //concatenates found entered username and password as cookie for session verification
    var userpass = req.body.username + req.body.password;
    var cookie = new Cookies (req, res);
    cookies.set('secure', userpass);
    next();
  }
};

module.exports = cookiesController;
